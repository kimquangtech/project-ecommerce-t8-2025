"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setting = void 0;
const setting = async (req, res) => {
    res.render("admin/pages/setting/language.pug", {
        TITLE_PAGE: ROUTER_ADMIN.LANGUAGE_SETTING.TITLE
    });
};
exports.setting = setting;
