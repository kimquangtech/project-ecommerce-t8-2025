import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { ObjectId } from "mongodb";
import ArticleCategory from "../../model/article-category.model";

const createPostSchema = Joi.object({
  name: Joi.string()
    .min(5)
    .max(100)
    .required()
    .messages({
      'string.min': 'Tên danh mục phải có ít nhất 2 ký tự',
      'string.max': 'Tên danh mục không được quá 100 ký tự',
      'string.empty': 'Tên danh mục là bắt buộc'
    }),
  description: Joi.string()
    .max(255)
    .allow('')
    .optional()
    .messages({
      'string.max': 'Mô tả không được quá 255 ký tự'
    }),
  parent_id: Joi.string()
    .allow('', null)
    .optional()
});

export const createPost = async (req: Request, res: Response, next: NextFunction) => {
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

    const existingCategory = await ArticleCategory.findOne({ name: value.name });
    if (existingCategory) {
      return res.json({
        success: false,
        message: "Tên danh mục đã tồn tại!"
      });
    }
    req.body = value;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Lỗi server khi validate dữ liệu!"
    });
  }
};
