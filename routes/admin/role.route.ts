import express, { Application } from "express";
import * as roleController from "../../controller/admin/role.controller";
import { createValidate } from "../../validation/admin/role.validate";

const router = express.Router();

export default (app: Application) => {
  const ROUTER_ADMIN = app.get('ROUTER_ADMIN');
  
  router.get(ROUTER_ADMIN.ROLE_INDEX.PATH, roleController.index)
  router.get(ROUTER_ADMIN.ROLE_CREATE.PATH, roleController.create)
  router.post(ROUTER_ADMIN.API.ROLE_CREATE, createValidate, roleController.createPost)
  router.patch(ROUTER_ADMIN.API.ROLE_UPDATE + "/:id", createValidate, roleController.updatePatch)
  router.patch(ROUTER_ADMIN.API.ROLE_DELETE_PATCH + "/:id", roleController.deletePatch)
  router.patch(ROUTER_ADMIN.API.ROLE_RESTORE + "/:id", roleController.restorePatch)
  router.patch(ROUTER_ADMIN.API.ROLE_DELETE_MANY_PATCH, roleController.deleteManyPatch)
  router.patch(ROUTER_ADMIN.API.ROLE_RESTORE_MANY, roleController.restoreManyPatch)
  router.delete(ROUTER_ADMIN.API.ROLE_DELETE_HARD + "/:id", roleController.deleteHard)
  router.delete(ROUTER_ADMIN.API.ROLE_DELETE_MANY_HARD, roleController.deleteManyHard)
  
  return router;
}