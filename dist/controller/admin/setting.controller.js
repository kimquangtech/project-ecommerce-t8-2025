"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageAdmin = exports.index = void 0;
const index = async (req, res) => {
    res.render("admin/pages/setting/index.pug");
};
exports.index = index;
const pageAdmin = async (req, res) => {
    res.render("admin/pages/setting/page-admin.pug");
};
exports.pageAdmin = pageAdmin;
