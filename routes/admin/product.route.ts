import express from "express";
import { index } from "../../controller/admin/product.controller";

const router = express.Router();

router.get("", index)

export default router;