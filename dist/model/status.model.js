"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
console.log(globalThis.ok);
const statusSchema = new mongoose_1.Schema({
    ROLE: {
        ACTIVE: {
            CODE: String,
            NAME: String,
            DESCRIPTION: String,
        }
    }
}, {
    timestamps: true,
});
const Status = (0, mongoose_1.model)("Status", statusSchema);
exports.default = Status;
