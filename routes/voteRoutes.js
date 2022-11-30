import express from "express";
import authenticateUser from "../middleware/auth.js";

const router = express.Router();

import {
	createOrUpdateVote,
	deleteVote,
	getVotes,
} from "../controllers/voteController.js";

router.route("/").post(authenticateUser, createOrUpdateVote).get(getVotes);

router.route("/:id").delete(authenticateUser, deleteVote);

export default router;
