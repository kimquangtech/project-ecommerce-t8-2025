"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roleController = __importStar(require("../../controller/admin/role.controller"));
const role_validate_1 = require("../../validation/admin/role.validate");
const router = express_1.default.Router();
exports.default = (app) => {
    const ROUTER_ADMIN = app.get('ROUTER_ADMIN');
    router.get(ROUTER_ADMIN.ROLE_INDEX.PATH, roleController.index);
    router.get(ROUTER_ADMIN.ROLE_CREATE.PATH, roleController.create);
    router.post(ROUTER_ADMIN.API.ROLE_CREATE, role_validate_1.createValidate, roleController.createPost);
    router.patch(ROUTER_ADMIN.API.ROLE_UPDATE + "/:id", role_validate_1.createValidate, roleController.updatePatch);
    router.patch(ROUTER_ADMIN.API.ROLE_DELETE_PATCH + "/:id", roleController.deletePatch);
    router.patch(ROUTER_ADMIN.API.ROLE_RESTORE + "/:id", roleController.restorePatch);
    router.patch(ROUTER_ADMIN.API.ROLE_DELETE_MANY_PATCH, roleController.deleteManyPatch);
    router.patch(ROUTER_ADMIN.API.ROLE_RESTORE_MANY, roleController.restoreManyPatch);
    router.delete(ROUTER_ADMIN.API.ROLE_DELETE_HARD + "/:id", roleController.deleteHard);
    router.delete(ROUTER_ADMIN.API.ROLE_DELETE_MANY_HARD, roleController.deleteManyHard);
    return router;
};
