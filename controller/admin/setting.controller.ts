import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {
     res.render("admin/pages/setting/index.pug");
}

export const pageAdmin = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/page-admin.pug");
}