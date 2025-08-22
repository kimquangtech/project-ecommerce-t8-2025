"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_route_1 = __importDefault(require("./client/index.route"));
const index_route_2 = __importDefault(require("./admin/index.route"));
const route_admin_model_1 = __importDefault(require("../model/route-admin.model"));
exports.default = async (app) => {
    const ROUTER_ADMIN = await route_admin_model_1.default.findOne({});
    await (0, index_route_1.default)(app);
    await (0, index_route_2.default)(app, ROUTER_ADMIN);
};
