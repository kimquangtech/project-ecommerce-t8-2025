"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const baseRouteSchema = {
    PATH: String,
    TITLE: String,
    DESCRIPTION: String,
    KEYWORD: [String],
};
const routeAdminSchema = new mongoose_1.Schema({
    PRODUCT_INDEX: baseRouteSchema,
    PAGE_ADMIN: baseRouteSchema,
    DASHBOARD_INDEX: baseRouteSchema,
    CUSTOMER_INDEX: baseRouteSchema,
    ARTICLE_CATEGORY_CREATE: baseRouteSchema,
    INFO_WEBSITE_INDEX: baseRouteSchema,
    API: {
        ROLE_CREATE: String,
        ROLE_UPDATE: String,
        ROLE_DELETE_PATCH: String,
        ROLE_DELETE_MANY_PATCH: String,
        ROLE_DELETE_HARD: String,
        ROLE_RESTORE: String,
        ROLE_RESTORE_MANY: String,
        ROLE_DELETE_MANY_HARD: String,
        STATUS_CREATE: String,
        ARTICLE_CATEGORY_CREATE: String,
        ARTICLE_CATEGORY_UPDATE: String,
        ARTICLE_CATEGORY_DELETE_PATCH: String,
        ARTICLE_CATEGORY_DELETE_MANY_PATCH: String,
        ARTICLE_CATEGORY_DELETE_HARD: String,
        ARTICLE_CATEGORY_RESTORE: String,
        ARTICLE_CATEGORY_RESTORE_MANY: String,
        ARTICLE_CATEGORY_DELETE_MANY_HARD: String,
    },
    VARIABLE: {
        PRODUCT: String,
        ARTICLE: String,
        ROLE: String,
        PREFIX: String,
        PAGE: String,
        DASHBOARD: String,
        CUSTOMER: String,
        SETTING: String,
        STATUS: String,
        ARTICLE_CATEGORY: String
    }
}, {
    timestamps: true
});
const RouteAdmin = (0, mongoose_1.model)("Route Admin", routeAdminSchema, "ROUTER_ADMIN");
exports.default = RouteAdmin;
