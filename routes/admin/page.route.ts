import express from "express";
import { Application } from "express";
import {  pageAdmin } from "../../controller/admin/page.controller";

const router = express.Router();

export default (app: Application) => {
    const ROUTER_ADMIN = app.get('ROUTER_ADMIN');
    
    router.get(ROUTER_ADMIN.PAGE_ADMIN.PATH, pageAdmin)
    
    return router;
}