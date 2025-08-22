"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const accountSchema = new mongoose_1.Schema({
    username: String,
    email: String,
    password: String,
    permisstion: [String],
    token: String,
    deleted: {
        type: Boolean,
        default: false
    },
    status: String,
    fullname: String,
    phone: String,
    address: String,
    avatar: String,
    role: String,
    created_by: String,
    updated_by: String,
    deleted_by: String,
}, {
    timestamps: true,
    autoCreate: true
});
const AccountAdmin = (0, mongoose_1.model)("AccountAdmin", accountSchema);
exports.default = AccountAdmin;
