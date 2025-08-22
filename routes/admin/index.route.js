"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_route_1 = __importDefault(require("./dashboard.route"));
const product_route_1 = __importDefault(require("./product.route"));
const customer_route_1 = __importDefault(require("./customer.route"));
const setting_route_1 = __importDefault(require("./setting.route"));
const page_route_1 = __importDefault(require("./page.route"));
const role_route_1 = __importDefault(require("./role.route"));
const status_route_1 = __importDefault(require("./status.route"));
const article_category_route_1 = __importDefault(require("./article-category.route"));
exports.default = async (app, ROUTER_ADMIN) => {
    app.locals.ROUTER_ADMIN = ROUTER_ADMIN;
    app.set('ROUTER_ADMIN', ROUTER_ADMIN);
    global.ROUTER_ADMIN = ROUTER_ADMIN;
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.DASHBOARD}`, dashboard_route_1.default);
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.PRODUCT}`, product_route_1.default);
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.SETTING}`, (0, setting_route_1.default)(app));
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.PAGE}`, (0, page_route_1.default)(app));
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.ROLE}`, (0, role_route_1.default)(app));
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.STATUS}`, (0, status_route_1.default)(app));
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.ARTICLE_CATEGORY}`, (0, article_category_route_1.default)(app));
    app.use(`${ROUTER_ADMIN.VARIABLE.PREFIX}${ROUTER_ADMIN.VARIABLE.CUSTOMER}`, customer_route_1.default);
};
