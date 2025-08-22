import { Schema, model } from "mongoose";


const accountSchema = new Schema({
  username: String,
  email: String,
  password: String,
  permisstion: [ String ],
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
})

const AccountAdmin = model("AccountAdmin", accountSchema);

export default AccountAdmin;