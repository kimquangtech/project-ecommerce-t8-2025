import express from "express";
import { dashboard } from "../../controller/admin/dashboard.controller";

const router = express.Router();

router.get("", dashboard)

export default router;