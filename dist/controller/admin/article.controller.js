"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const createPost = async (req, res) => {
    try {
        console.log("Thêm thành công!");
        res.status(200).json({
            success: true,
            message: "Thêm bài viết thành công!"
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Thêm bài viết thất bại!"
        });
    }
};
exports.createPost = createPost;
