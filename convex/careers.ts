// convex/careers.ts
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const addCareer = mutation({
    args: {
        title: v.string(),
        introduction: v.string(),
        subTitle1: v.optional(v.string()),
        description1: v.optional(v.string()),
        subTitle2: v.optional(v.string()),
        description2: v.optional(v.string()),
        subTitle3: v.optional(v.string()),
        description3: v.optional(v.string()),
        coverImage: v.optional(v.id("_storage")),
        introImage: v.optional(v.id("_storage")),
        categoryId: v.id("categories"),
    },
    handler: async (ctx, args) => {
        const newCareerId = await ctx.db.insert("careers", {
            title: args.title,
            introduction: args.introduction,
            subTitle1: args.subTitle1,
            description1: args.description1,
            subTitle2: args.subTitle2,
            description2: args.description2,
            subTitle3: args.subTitle3,
            description3: args.description3,
            coverImage: args.coverImage,
            introImage: args.introImage,
            categoryId: args.categoryId,
        });
        return newCareerId;
    },
});

// export const getAllCareers = query({
//     handler: async (ctx) => {
//         // Fetch all careers
//         const careers = await ctx.db.query("careers").collect();

//         // Map over careers and fetch the corresponding category and image URLs for each career
//         const careersWithDetails = await Promise.all(
//             careers.map(async (career) => {
//                 // Fetch category by ID
//                 const category = await ctx.db.get(career.categoryId);

//                 // Initialize URLs for images
//                 let coverImageUrl = null;
//                 let introImageUrl = null;

//                 // Fetch cover image URL if it exists
//                 if (career.coverImage) {
//                     coverImageUrl = await ctx.storage.getUrl(career.coverImage);
//                 }

//                 // Fetch intro image URL if it exists
//                 if (career.introImage) {
//                     introImageUrl = await ctx.storage.getUrl(career.introImage);
//                 }

//                 return {
//                     ...career,
//                     categoryName: category?.name || "Unknown", // Add category name to the career object
//                     coverImageUrl, // Add cover image URL
//                     introImageUrl, // Add intro image URL
//                 };
//             })
//         );

//         return careersWithDetails;
//     },
// });

export const getAllCareers = query({
    handler: async (ctx) => {
        const careers = await ctx.db.query("careers").collect();

        const careersWithDetails = await Promise.all(
            careers.map(async (career) => {
                const category = await ctx.db.get(career.categoryId);

                let coverImageUrl = null;
                let introImageUrl = null;

                try {
                    if (career.coverImage) {
                        coverImageUrl = await ctx.storage.getUrl(career.coverImage);
                    }
                    if (career.introImage) {
                        introImageUrl = await ctx.storage.getUrl(career.introImage);
                    }
                } catch (error) {
                    console.error(`Error fetching image URLs for career ${career._id}:`, error);
                }

                return {
                    ...career,
                    categoryName: category?.name || "Unknown",
                    coverImageUrl,
                    introImageUrl,
                };
            })
        );

        return careersWithDetails;
    },
});


export const getCareerById = query({
    args: {
        id: v.id("careers"), // Validate that the ID belongs to the careers table
    },
    handler: async (ctx, args) => {
        // Fetch the career by ID
        const career = await ctx.db.get(args.id);
        if (!career) {
            throw new Error("Career not found");
        }

        // Fetch the category for the career
        const category = await ctx.db.get(career.categoryId);

        // Initialize URLs for images
        let coverImageUrl = null;
        let introImageUrl = null;

        // Fetch cover image URL if it exists
        if (career.coverImage) {
            coverImageUrl = await ctx.storage.getUrl(career.coverImage);
        }

        // Fetch intro image URL if it exists
        if (career.introImage) {
            introImageUrl = await ctx.storage.getUrl(career.introImage);
        }

        return {
            ...career,
            categoryName: category?.name || "Unknown", // Add category name to the career object
            coverImageUrl, // Add cover image URL
            introImageUrl, // Add intro image URL
        };
    },
});


export const searchCareersByTitleOrCategory = query({
    args: {
        searchTerm: v.string(),
    },
    handler: async (ctx, args) => {

        const careers = await ctx.db.query("careers").collect();


        const categories = await ctx.db.query("categories").collect();
        const categoryMap = Object.fromEntries(categories.map(cat => [cat._id, cat.name]));


        const filteredCareers = careers.filter(career => {
            const titleMatch = career.title.toLowerCase().includes(args.searchTerm.toLowerCase());
            const categoryMatch = categoryMap[career.categoryId]?.toLowerCase().includes(args.searchTerm.toLowerCase());
            return titleMatch || categoryMatch;
        });

        return filteredCareers;
    },
});
