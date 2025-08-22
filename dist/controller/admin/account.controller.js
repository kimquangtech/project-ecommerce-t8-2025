"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const role_model_1 = __importDefault(require("../../model/role.model"));
const status_model_1 = __importDefault(require("../../model/status.model"));
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
