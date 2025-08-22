import { NextFunction, Request, Response } from "express";
import Role from "../../model/role.model";
import { ObjectId } from "mongodb";

export const createValidate = async (req: Request, res: Response, next: NextFunction) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Vui lòng nhập tên nhóm quyền!"
    })
  }
  next()
}
