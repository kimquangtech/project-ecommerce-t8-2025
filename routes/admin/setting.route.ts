import express from "express";
import { Application } from "express";
import * as settingController from "../../controller/admin/setting.controller";
import * as infoWebsiteController from "../../controller/admin/info-website.controller";

const router = express.Router();

export default (app: Application) => {
    const ROUTER_ADMIN = app.get('ROUTER_ADMIN');

    router.get(ROUTER_ADMIN.INFO_WEBSITE_INDEX.PATH, infoWebsiteController.index)

    router.get("", settingController.index)
    // router.get(ROUTER_ADMIN.PAGE_ADMIN.PATH, pageAdmin)
    
    return router;
}