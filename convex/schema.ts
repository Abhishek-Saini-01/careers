import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    categories: defineTable({
        name: v.string(),
    }).index("by_name", ["name"]),
    careers: defineTable({
        title: v.string(),
        introduction: v.string(),
        subTitle1: v.optional(v.string()),
        description1: v.optional(v.string()),
        subTitle2: v.optional(v.string()),
        description2: v.optional(v.string()),
        subTitle3: v.optional(v.string()),
        description3: v.optional(v.string()),
        coverImage: v.string(),
        introImage: v.optional(v.string()),
        categoryId: v.id("categories")
    }).searchIndex("search_title", {
        searchField: "title",
    }).index("by_title", ["title"]),
})
