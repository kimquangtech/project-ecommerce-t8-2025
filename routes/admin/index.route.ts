import { Application } from "express";
import dashboard from "./dashboard.route";
import product from "./product.route";
import customer from "./customer.route";
import setting from "./setting.route";
import pageAdmin from "./page.route";
import role from "./role.route";
import status from "./status.route";
import articleCategory from "./article-category.route";

export default async (app: Application, ROUTER_ADMIN: any) => {
    app.locals.ROUTER_ADMIN = ROUTER_ADMIN
    app.set('ROUTER_ADMIN', ROUTER_ADMIN)
    global.ROUTER_ADMIN = ROUTER_ADMIN
    
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.DASHBOARD}`, dashboard);
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.PRODUCT}`, product);
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.SETTING}`, setting(app));
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.PAGE}`, pageAdmin(app));
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.ROLE}`, role(app));
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.STATUS}`, status(app));
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.ARTICLE_CATEGORY}`, articleCategory(app));
    
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.CUSTOMER}`, customer);
}