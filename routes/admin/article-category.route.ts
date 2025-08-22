import express, { Application } from "express";
import * as articleCategory from "../../controller/admin/article-category.controller";
import * as articleCategoryValidate from "../../validation/admin/article-category.validate";

const router = express.Router();

export default (app: Application) => {
  const ROUTER_ADMIN = app.get('ROUTER_ADMIN');
  
  router.get(ROUTER_ADMIN.ARTICLE_CATEGORY_CREATE.PATH, articleCategory.create)
  router.post(ROUTER_ADMIN.API.ROLE_CREATE, articleCategoryValidate.createPost,  articleCategory.createPost)

  return router;
}