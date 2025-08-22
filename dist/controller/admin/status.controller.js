"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const status_model_1 = __importDefault(require("../../model/status.model"));
const createPost = async (req, res) => {
    await status_model_1.default.create(req.body);
    res.status(200).json({
        success: true,
        message: "Thêm trạng thái thành công!"
    });
};
exports.createPost = createPost;
