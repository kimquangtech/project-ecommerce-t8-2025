import { Schema, model } from "mongoose";
import Status from "./status.model";

const roleSchema = new Schema({
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
  })

const Role = model("Role", roleSchema);

export default Role;