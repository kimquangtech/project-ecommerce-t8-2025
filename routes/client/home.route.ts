import express from "express";
import { home } from "../../controller/client/home.controller";

const router = express.Router();

router.get("/", home)

export default router;