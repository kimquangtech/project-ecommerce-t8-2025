import { Schema, model } from "mongoose";
console.log((globalThis as any).ok);


const statusSchema = new Schema({
  ROLE: {
    ACTIVE: {
      CODE: String,
      NAME: String,
      DESCRIPTION: String,
    }
  }
}, {
  timestamps: true,
})

const Status = model("Status", statusSchema);

export default Status;