import { Request, Response } from "express";
import ArticleCategory from "../../model/article-category.model"

export const index = async (req: Request, res: Response) => {
  try {
    res.render("admin/pages/setting/info-website", {
      TITLE_PAGE: ROUTER_ADMIN.INFO_WEBSITE_INDEX.TITLE,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Lỗi khi tải trang thêm danh mục bài viết!"
    })
  }
}