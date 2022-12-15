import express from "express";
import authenticateUser from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

import {
	getAllTopic,
	createTopic,
	updateTopic,
	deleteTopic,
	getMyTopics,
	getAllTopicsAdmin,
	deleteDesign,
} from "../controllers/topicController.js";

router
	.route("/")
	.get(getAllTopic)
	.post(upload.single("image"), authenticateUser, createTopic);

router.route("/all").get(getAllTopicsAdmin);

router
	.route("/:id")
	.patch(upload.single("image"), authenticateUser, updateTopic)
	.delete(deleteTopic);

router.route("/me").get(authenticateUser, getMyTopics);
router.route("/design/:id/:designId").delete(deleteDesign);

export default router;
