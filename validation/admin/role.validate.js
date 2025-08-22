"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createValidate = void 0;
const createValidate = async (req, res, next) => {
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Vui lòng nhập tên nhóm quyền!"
        });
    }
    next();
};
exports.createValidate = createValidate;
