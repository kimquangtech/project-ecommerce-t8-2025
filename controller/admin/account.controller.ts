import { Request, Response } from "express";
import Role from "../../model/role.model";
import { ObjectId } from "mongodb";
import Status from "../../model/status.model";


export const createPost = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    // req.body.created_by = new ObjectId(res.locals.ADMIN._id)
    const STATUS = await Status.findOne({});
    req.body.status = STATUS?.ROLE?.ACTIVE?.CODE || null;
    req.body.position = await Role.countDocuments();
    await Role.create(req.body);
    res.status(200).json({
      success: true,
      message: "Thêm nhóm quyền thành công!"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Thêm nhóm quyền thất bại!"
    })
  }
}