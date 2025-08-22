import { Application } from "express";
import home from "./home.route";

export default async (app: Application) => {
     app.use("/", home);
}