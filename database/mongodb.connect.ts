import mongoose from "mongoose";

export const connect = async () => {
     try {
          await mongoose.connect(process.env.MONGODB_URI as string);
          console.log("Kết nối mongodb thành công!");
     } catch (error) {
          console.log("Kết nối mongodb thành thất bại!");
          
     }
}