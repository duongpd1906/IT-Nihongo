import express from "express";
import authenticateUser from "../middleware/auth.js";

const router = express.Router();

import {
	createNewComments,
	deleteComment,
	getAllComments,
	getCommentsByDesignId,
	getCommentsOfMe,
	updateComment,
} from "../controllers/commentController.js";

router.route("/").post(authenticateUser, createNewComments).get(getAllComments);
router.route("/:id").delete(deleteComment).patch(updateComment);
router.route("/ByDesignId/:id").get(getCommentsByDesignId);
router.route("/me").get(authenticateUser, getCommentsOfMe);

export default router;
