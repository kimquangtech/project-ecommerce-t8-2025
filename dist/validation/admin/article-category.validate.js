"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const joi_1 = __importDefault(require("joi"));
const article_category_model_1 = __importDefault(require("../../model/article-category.model"));
const createPostSchema = joi_1.default.object({
    name: joi_1.default.string()
        .min(5)
        .max(100)
        .required()
        .messages({
        'string.min': 'Tên danh mục phải có ít nhất 2 ký tự',
        'string.max': 'Tên danh mục không được quá 100 ký tự',
        'string.empty': 'Tên danh mục là bắt buộc'
    }),
    description: joi_1.default.string()
        .max(255)
        .allow('')
        .optional()
        .messages({
        'string.max': 'Mô tả không được quá 255 ký tự'
    }),
    parent_id: joi_1.default.string()
        .allow('', null)
        .optional()
});
const createPost = async (req, res, next) => {
    try {
        const { error, value } = createPostSchema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        });
        if (error) {
            const errorMessages = error.details.map(detail => detail.message);
            return res.json({
                success: false,
                message: errorMessages,
            });
        }
        const existingCategory = await article_category_model_1.default.findOne({ name: value.name });
        if (existingCategory) {
            return res.json({
                success: false,
                message: "Tên danh mục đã tồn tại!"
            });
        }
        req.body = value;
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Lỗi server khi validate dữ liệu!"
        });
    }
};
exports.createPost = createPost;
