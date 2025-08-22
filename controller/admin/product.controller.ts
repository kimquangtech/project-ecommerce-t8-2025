import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {
     res.render("admin/pages/product/index.pug");
}