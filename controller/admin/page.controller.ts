import { Request, Response } from "express";

export const pageAdmin = async (req: Request, res: Response) => {
  res.render("admin/pages/setting/page-admin.pug");
}