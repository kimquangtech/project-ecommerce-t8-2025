"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteManyHard = exports.deleteHard = exports.restoreManyPatch = exports.restorePatch = exports.deleteManyPatch = exports.deletePatch = exports.updatePatch = exports.createPost = exports.index = void 0;
const role_model_1 = __importDefault(require("../../model/role.model"));
const mongodb_1 = require("mongodb");
const status_model_1 = __importDefault(require("../../model/status.model"));
const index = async (req, res) => {
    res.render("admin/pages/role/index.pug");
};
exports.index = index;
const createPost = async (req, res) => {
    var _a, _b;
    try {
        const { name, description } = req.body;
        const STATUS = await status_model_1.default.findOne({});
        req.body.status = ((_b = (_a = STATUS === null || STATUS === void 0 ? void 0 : STATUS.ROLE) === null || _a === void 0 ? void 0 : _a.ACTIVE) === null || _b === void 0 ? void 0 : _b.CODE) || null;
        req.body.position = await role_model_1.default.countDocuments();
        await role_model_1.default.create(req.body);
        res.status(200).json({
            success: true,
            message: "Thêm nhóm quyền thành công!"
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Thêm nhóm quyền thất bại!"
        });
    }
};
exports.createPost = createPost;
const updatePatch = async (req, res) => {
    const { id } = req.params;
    await role_model_1.default.updateOne({ _id: new mongodb_1.ObjectId(id) }, req.body);
    res.status(200).json({
        success: true,
        message: "Cập nhật nhóm quyền thành công!"
    });
};
exports.updatePatch = updatePatch;
const deletePatch = async (req, res) => {
    try {
        const { id } = req.params;
        await role_model_1.default.updateOne({ _id: new mongodb_1.ObjectId(id) }, { deleted: true });
        res.status(200).json({
            success: true,
            message: "Xóa nhóm quyền thành công!"
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Xóa nhóm quyền thất bại!"
        });
    }
};
exports.deletePatch = deletePatch;
const deleteManyPatch = async (req, res) => {
    const { id } = req.body;
    await role_model_1.default.updateMany({ _id: id }, { deleted: true });
    res.status(200).json({
        success: true,
        message: "Xóa nhóm quyền thành công!"
    });
};
exports.deleteManyPatch = deleteManyPatch;
const restorePatch = async (req, res) => {
    const { id } = req.params;
    await role_model_1.default.updateOne({ _id: new mongodb_1.ObjectId(id) }, { deleted: false });
    res.status(200).json({
        success: true,
        message: "Khôi phục nhóm quyền thành công!"
    });
};
exports.restorePatch = restorePatch;
const restoreManyPatch = async (req, res) => {
    try {
        const { id } = req.body;
        await role_model_1.default.updateMany({ _id: id }, { deleted: false });
        res.status(200).json({
            success: true,
            message: "Khôi phục nhóm quyền thành công!"
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Khôi phục nhóm quyền thất bại!"
        });
    }
};
exports.restoreManyPatch = restoreManyPatch;
const deleteHard = async (req, res) => {
    try {
        const { id } = req.params;
        await role_model_1.default.deleteOne({ _id: new mongodb_1.ObjectId(id) });
        res.status(200).json({
            success: true,
            message: "Xóa nhóm quyền thành công!"
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Xóa nhóm quyền thất bại!"
        });
    }
};
exports.deleteHard = deleteHard;
const deleteManyHard = async (req, res) => {
    try {
        const { id } = req.body;
        await role_model_1.default.deleteMany({ _id: { $in: id } });
        res.status(200).json({
            success: true,
            message: "Xóa nhóm quyền thành công!"
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Xóa nhóm quyền thất bại!"
        });
    }
};
exports.deleteManyHard = deleteManyHard;
