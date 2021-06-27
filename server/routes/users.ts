import express from "express";
import { getUser, createUser } from "../controllers/users";

const router = express.Router();

router.get("/:id", getUser);
router.post("/", createUser);

export default router;
