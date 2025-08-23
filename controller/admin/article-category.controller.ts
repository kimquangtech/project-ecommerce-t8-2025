import { Request, Response } from "express";
import Role from "../../model/role.model";
import { ObjectId } from "mongodb";
import Status from "../../model/status.model";
import ArticleCategory from "../../model/article-category.model";
import createTreeHelper from "../../helpers/createTree.helper";

export const index = async (req: Request, res: Response) => {
  try {
    const categories = await ArticleCategory.find({});
    const createTreeCategories = createTreeHelper(categories, null);
    
    res.render("admin/pages/article-category/index", {
      TITLE_PAGE: ROUTER_ADMIN.ARTICLE_CATEGORY_INDEX.TITLE,
      categories: createTreeCategories
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Lỗi khi tải trang danh mục bài viết!"
    })
  }
}

export const create = async (req: Request, res: Response) => {
  try {
    const categories = await ArticleCategory.find({});
    const createTreeCategories = createTreeHelper(categories, null);
    
    res.render("admin/pages/article-category/create", {
      TITLE_PAGE: ROUTER_ADMIN.ARTICLE_CATEGORY_CREATE.TITLE,
      categories: createTreeCategories
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
    const newRecord = new ArticleCategory(req.body);
    await newRecord.save();
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

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await ArticleCategory.findById(id).populate("parent_id");
    
    const categories = await ArticleCategory.find({});
    const createTreeCategories = createTreeHelper(categories, null);
    
    res.render("admin/pages/article-category/update", {
      TITLE_PAGE: ROUTER_ADMIN.ARTICLE_CATEGORY_UPDATE.TITLE,
      categories: createTreeCategories,
      category
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Lỗi khi tải trang cập nhật danh mục bài viết!"
    })
  }
}
