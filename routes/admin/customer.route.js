"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("../../controller/admin/customer.controller");
const router = express_1.default.Router();
router.get("", customer_controller_1.index);
exports.default = router;
