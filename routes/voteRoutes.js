import express from "express";
import authenticateUser from "../middleware/auth.js";

const router = express.Router();

import {
	createOrUpdateVote,
	deleteVote,
	getAllVotes,
	getMyVotes,
} from "../controllers/voteController.js";

router.route("/").post(authenticateUser, createOrUpdateVote).get(getAllVotes);
router.route("/me").get(authenticateUser, getMyVotes);
router.route("/:id").delete(authenticateUser, deleteVote);

export default router;
