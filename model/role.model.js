"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const roleSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    permission: [String],
    deleted: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        ref: "Status",
    },
    position: Number
}, {
    timestamps: true,
    autoCreate: true
});
const Role = (0, mongoose_1.model)("Role", roleSchema);
exports.default = Role;
