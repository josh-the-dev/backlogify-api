import express from "express";
import { createBacklog, getBacklogs } from "../controllers/backlogs";

const router = express.Router();

router.get("/", getBacklogs);
router.post("/", createBacklog);

export default router;
