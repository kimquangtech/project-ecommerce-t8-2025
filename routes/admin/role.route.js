"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const role_controller_1 = require("../../controller/admin/role.controller");
const role_validate_1 = require("../../validation/admin/role.validate");
const router = express_1.default.Router();
exports.default = (app) => {
    const ROUTER_ADMIN = app.get('ROUTER_ADMIN');
    router.post(ROUTER_ADMIN.API.ROLE_CREATE, role_validate_1.createValidate, role_controller_1.createPost);
    router.patch(ROUTER_ADMIN.API.ROLE_UPDATE + "/:id", role_validate_1.createValidate, role_controller_1.updatePatch);
    router.patch(ROUTER_ADMIN.API.ROLE_DELETE_PATCH + "/:id", role_controller_1.deletePatch);
    router.patch(ROUTER_ADMIN.API.ROLE_RESTORE + "/:id", role_controller_1.restorePatch);
    router.patch(ROUTER_ADMIN.API.ROLE_DELETE_MANY_PATCH, role_controller_1.deleteManyPatch);
    router.patch(ROUTER_ADMIN.API.ROLE_RESTORE_MANY, role_controller_1.restoreManyPatch);
    router.delete(ROUTER_ADMIN.API.ROLE_DELETE_HARD + "/:id", role_controller_1.deleteHard);
    router.delete(ROUTER_ADMIN.API.ROLE_DELETE_MANY_HARD, role_controller_1.deleteManyHard);
    return router;
};
