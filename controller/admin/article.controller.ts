import { Request, Response } from "express";
import Role from "../../model/role.model";
import { ObjectId } from "mongodb";
import Status from "../../model/status.model";


export const createPost = async (req: Request, res: Response) => {
  try {
    console.log("Thêm thành công!")
    res.status(200).json({
      success: true,
      message: "Thêm bài viết thành công!"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Thêm bài viết thất bại!"
    })
  }

}