import { Request, Response } from "express";
import Role from "../../model/role.model";
import { ObjectId } from "mongodb";
import Status from "../../model/status.model";

export const createPost = async (req: Request, res: Response) => {
  await Status.create(req.body);
  res.status(200).json({
    success: true,
    message: "Thêm trạng thái thành công!"
  })
}