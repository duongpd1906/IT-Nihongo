import express from "express";
import authenticateUser from "../middleware/auth.js";

const router = express.Router();

import {
	createNewComments,
	deleteComment,
	getAllComments,
	getComments,
	getCommentsOfMe,
} from "../controllers/commentController.js";

router.route("/").post(authenticateUser, createNewComments).get(getAllComments);
router.route("/:designId", getComments);
router.route("/:id").delete(deleteComment);
router.route("/me").get(authenticateUser, getCommentsOfMe);

export default router;
