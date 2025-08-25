import express, { Application } from "express";
import * as languageController from "../../controller/admin/article-category.controller";

const router = express.Router();

export default (app: Application) => {
  const ROUTER_ADMIN = app.get('ROUTER_ADMIN');
  

  return router;
}