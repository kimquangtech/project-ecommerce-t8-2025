import { Schema, model } from "mongoose";

const baseRouteSchema = {
  PATH: String,
  TITLE: String,
  DESCRIPTION: String,
  KEYWORD: [String],
};

const routeAdminSchema = new Schema({
  PRODUCT_INDEX: baseRouteSchema,
  PAGE_ADMIN: baseRouteSchema,
  DASHBOARD_INDEX: baseRouteSchema,
  CUSTOMER_INDEX: baseRouteSchema,
  ARTICLE_CATEGORY_INDEX: baseRouteSchema,
  ARTICLE_CATEGORY_CREATE: baseRouteSchema,
  ARTICLE_CATEGORY_UPDATE: baseRouteSchema,
  ROLE_INDEX: baseRouteSchema,
  ROLE_CREATE: baseRouteSchema,
  PERMISSION_INDEX: baseRouteSchema,
  INFO_WEBSITE_INDEX: baseRouteSchema,
  LANGUAGE_SETTING: baseRouteSchema,
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
    ARTICLE_CATEGORY: String,
    LANGUAGE: String
  }
}, {
  timestamps: true
})

const RouteAdmin = model("Route Admin", routeAdminSchema, "ROUTER_ADMIN");

export default RouteAdmin;