"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const route_admin_model_1 = __importDefault(require("../model/route-admin.model"));
exports.default = async (req, res, next) => {
    try {
        const ROUTER_ADMIN = await route_admin_model_1.default.findOne({});
        res.locals.ROUTER_ADMIN = ROUTER_ADMIN;
        if (res.locals.ROUTER_ADMIN)
            next();
    }
    catch (error) {
        next(error);
    }
};
