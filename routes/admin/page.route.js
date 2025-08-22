"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const page_controller_1 = require("../../controller/admin/page.controller");
const router = express_1.default.Router();
exports.default = (app) => {
    const ROUTER_ADMIN = app.get('ROUTER_ADMIN');
    router.get(ROUTER_ADMIN.PAGE_ADMIN.PATH, page_controller_1.pageAdmin);
    return router;
};
