
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const addCategory = mutation({
    args: {
        name: v.string(),
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("categories", {
            name: args.name,
        });
    },
});



export const getAllCategories = query({
    handler: async (ctx) => {
        return await ctx.db.query("categories").collect();
    },
});

export const getUniqueCategoriesByName = query({
    handler: async (ctx) => {
        // Fetch all categories
        const categories = await ctx.db.query("categories").collect();

        // Use a Set to filter unique category names
        const uniqueCategories = Array.from(
            new Set(categories.map((category) => category.name))
        ).map((name) => ({
            name,
        }));

        return uniqueCategories;
    },
});