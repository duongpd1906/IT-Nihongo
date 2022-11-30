import express from "express";
import authenticateUser from "../middleware/auth.js";

const router = express.Router();

import {
	createNewComments,
	getComments,
} from "../controllers/commentController.js";

router.route("/").post(authenticateUser, createNewComments);
router.route("/:id").get(getComments);

export default router;
