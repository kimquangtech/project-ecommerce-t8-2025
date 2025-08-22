import express, { Application } from "express";
import { createPost, deleteHard, deleteManyHard, deleteManyPatch, deletePatch, index, restoreManyPatch, restorePatch, updatePatch } from "../../controller/admin/role.controller";
import { createValidate } from "../../validation/admin/role.validate";

const router = express.Router();

export default (app: Application) => {
  const ROUTER_ADMIN = app.get('ROUTER_ADMIN');
  
  router.post(ROUTER_ADMIN.API.ROLE_CREATE, createValidate, createPost)
  router.patch(ROUTER_ADMIN.API.ROLE_UPDATE + "/:id", createValidate, updatePatch)
  router.patch(ROUTER_ADMIN.API.ROLE_DELETE_PATCH + "/:id", deletePatch)
  router.patch(ROUTER_ADMIN.API.ROLE_RESTORE + "/:id", restorePatch)
  router.patch(ROUTER_ADMIN.API.ROLE_DELETE_MANY_PATCH, deleteManyPatch)
  router.patch(ROUTER_ADMIN.API.ROLE_RESTORE_MANY, restoreManyPatch)
  router.delete(ROUTER_ADMIN.API.ROLE_DELETE_HARD + "/:id", deleteHard)
  router.delete(ROUTER_ADMIN.API.ROLE_DELETE_MANY_HARD, deleteManyHard)
  
  return router;
}