import { Request, Response } from "express";
import Role from "../../model/role.model";
import { ObjectId } from "mongodb";
import Status from "../../model/status.model";

export const index = async (req: Request, res: Response) => {
  res.render("admin/pages/role/index.pug", {
    TITLE_PAGE: ROUTER_ADMIN.ROLE_INDEX.TITLE
  });
}

export const create = async (req: Request, res: Response) => {
  try {
    res.render("admin/pages/role/create.pug", {
      TITLE_PAGE: ROUTER_ADMIN.ROLE_CREATE.TITLE
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Thêm nhóm quyền thất bại!"
    })
  }
}

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

export const updatePatch = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Role.updateOne({ _id: new ObjectId(id) }, req.body);

  res.status(200).json({
    success: true,
    message: "Cập nhật nhóm quyền thành công!"
  })
}

export const deletePatch = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await Role.updateOne({ _id: new ObjectId(id) }, { deleted: true });

    res.status(200).json({
      success: true,
      message: "Xóa nhóm quyền thành công!"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Xóa nhóm quyền thất bại!"
    })
  }
}

export const deleteManyPatch = async (req: Request, res: Response) => {
  const { id } = req.body;

  await Role.updateMany({ _id: id }, { deleted: true });

  res.status(200).json({
    success: true,
    message: "Xóa nhóm quyền thành công!"
  })
}

export const restorePatch = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Role.updateOne({ _id: new ObjectId(id) }, { deleted: false });

  res.status(200).json({
    success: true,
    message: "Khôi phục nhóm quyền thành công!"
  })
}

export const restoreManyPatch = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    await Role.updateMany({ _id: id }, { deleted: false });

    res.status(200).json({
      success: true,
      message: "Khôi phục nhóm quyền thành công!"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Khôi phục nhóm quyền thất bại!"
    })
  }

}

export const deleteHard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await Role.deleteOne({ _id: new ObjectId(id) });

    res.status(200).json({
      success: true,
      message: "Xóa nhóm quyền thành công!"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Xóa nhóm quyền thất bại!"
    })
  }

}

export const deleteManyHard = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    await Role.deleteMany({ _id: id });

    res.status(200).json({
      success: true,
      message: "Xóa nhóm quyền thành công!"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Xóa nhóm quyền thất bại!"
    })
  }
}

