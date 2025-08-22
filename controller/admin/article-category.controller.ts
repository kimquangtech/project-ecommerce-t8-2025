import { Request, Response } from "express";
import Role from "../../model/role.model";
import { ObjectId } from "mongodb";
import Status from "../../model/status.model";
import ArticleCategory from "../../model/article-category.model";

export const create = async (req: Request, res: Response) => {
  try {
    const categories = await ArticleCategory.find({})
    res.render("admin/pages/article-category/create", {
      TITLE_PAGE: ROUTER_ADMIN.ARTICLE_CATEGORY_CREATE.TITLE,
      categories: categories
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Lỗi khi tải trang thêm danh mục bài viết!"
    })
  }
}


export const createPost = async (req: Request, res: Response) => {
  try {
    // const newRecord = new ArticleCategory(req.body);
    // await newRecord.save();
    res.status(200).json({
      success: true,
      message: "Thêm danh mục bài viết thành công!"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Thêm danh mục bài viết thất bại!"
    })
  }

}