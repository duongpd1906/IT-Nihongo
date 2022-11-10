import express from "express";
import authenticateUser from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

import {
	getAllTopic,
	createTopic,
	updateTopic,
	deleteTopic,
} from "../controllers/topicController.js";

router
	.route("/")
	.get(getAllTopic)
	.post(upload.single("image"), authenticateUser, createTopic);

router
	.route("/:id")
	.patch(upload.single("image"), authenticateUser, updateTopic)
	.delete(authenticateUser, deleteTopic);

export default router;
