"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const status_controller_1 = require("../../controller/admin/status.controller");
const router = express_1.default.Router();
exports.default = (app) => {
    const ROUTER_ADMIN = app.get('ROUTER_ADMIN');
    router.post(ROUTER_ADMIN.API.STATUS_CREATE, status_controller_1.createPost);
    return router;
};
