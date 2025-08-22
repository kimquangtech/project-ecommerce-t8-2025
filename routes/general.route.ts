import { Application } from "express";
import clientRoute from "./client/index.route";
import adminRoute from "./admin/index.route";
import generalMiddleware from "../middlewares/genaral.middleware";
import RouteAdmin from "../model/route-admin.model";

export default async (app: Application) => {
     // Đăng ký middleware trước khi đăng ký các route
     // app.use(generalMiddleware);
     
     const ROUTER_ADMIN = await RouteAdmin.findOne({});
     
        
     await clientRoute(app);
     await adminRoute(app, ROUTER_ADMIN);
}