import { Request, Response } from "express";
import { ObjectId } from "mongodb";

export const setting = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/language.pug", {
    TITLE_PAGE: ROUTER_ADMIN.LANGUAGE_SETTING.TITLE
  });
}
