import express, { Application } from "express";
import { createPost } from "../../controller/admin/status.controller";

const router = express.Router();

export default (app: Application) => {
  const ROUTER_ADMIN = app.get('ROUTER_ADMIN');
  
  router.post(ROUTER_ADMIN.API.STATUS_CREATE, createPost)
  
  return router;
}