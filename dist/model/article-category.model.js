"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const articleCategorySchema = new mongoose_1.Schema({
    name: String,
    description: String,
}, {
    timestamps: true,
    autoCreate: true
});
const ArticleCategory = (0, mongoose_1.model)("Article Category", articleCategorySchema);
exports.default = ArticleCategory;
