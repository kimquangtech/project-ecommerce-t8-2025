"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.createPost = exports.create = exports.index = void 0;
const article_category_model_1 = __importDefault(require("../../model/article-category.model"));
const createTree_helper_1 = __importDefault(require("../../helpers/createTree.helper"));
const index = async (req, res) => {
    try {
        const categories = await article_category_model_1.default.find({});
        const createTreeCategories = (0, createTree_helper_1.default)(categories, null);
        res.render("admin/pages/article-category/index", {
            TITLE_PAGE: ROUTER_ADMIN.ARTICLE_CATEGORY_INDEX.TITLE,
            categories: createTreeCategories
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Lỗi khi tải trang danh mục bài viết!"
        });
    }
};
exports.index = index;
const create = async (req, res) => {
    try {
        const categories = await article_category_model_1.default.find({});
        const createTreeCategories = (0, createTree_helper_1.default)(categories, null);
        res.render("admin/pages/article-category/create", {
            TITLE_PAGE: ROUTER_ADMIN.ARTICLE_CATEGORY_CREATE.TITLE,
            categories: createTreeCategories
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
        const newRecord = new article_category_model_1.default(req.body);
        await newRecord.save();
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
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await article_category_model_1.default.findById(id).populate("parent_id");
        const categories = await article_category_model_1.default.find({});
        const createTreeCategories = (0, createTree_helper_1.default)(categories, null);
        res.render("admin/pages/article-category/update", {
            TITLE_PAGE: ROUTER_ADMIN.ARTICLE_CATEGORY_UPDATE.TITLE,
            categories: createTreeCategories,
            category
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Lỗi khi tải trang cập nhật danh mục bài viết!"
        });
    }
};
exports.update = update;
