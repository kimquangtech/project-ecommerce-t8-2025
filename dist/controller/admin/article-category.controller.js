"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.create = void 0;
const article_category_model_1 = __importDefault(require("../../model/article-category.model"));
const create = async (req, res) => {
    try {
        const categories = await article_category_model_1.default.find({});
        res.render("admin/pages/article-category/create", {
            TITLE_PAGE: ROUTER_ADMIN.ARTICLE_CATEGORY_CREATE.TITLE,
            categories: categories
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Lỗi khi tải trang thêm danh mục bài viết!"
        });
    }
};
exports.create = create;
const createPost = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Thêm danh mục bài viết thành công!"
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Thêm danh mục bài viết thất bại!"
        });
    }
};
exports.createPost = createPost;
