"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const index = async (req, res) => {
    try {
        res.render("admin/pages/setting/info-website", {
            TITLE_PAGE: ROUTER_ADMIN.INFO_WEBSITE_INDEX.TITLE,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Lỗi khi tải trang thêm danh mục bài viết!"
        });
    }
};
exports.index = index;
