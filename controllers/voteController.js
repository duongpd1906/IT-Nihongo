import { StatusCodes } from "http-status-codes";
import Topic from "../models/Topic.js";
import Vote from "../models/Vote.js";

const createOrUpdateVote = async (req, res) => {
	const { vote, topicId, design, position, amount, description } = req.body;

	const voteFields = {
		vote,
		createdBy: req.user.userId,
		design,
	};
	const detailFields = {
		position,
		amount,
		description,
	};

	voteFields.detail = detailFields;

	try {
		if (req.body.vote === false) {
			const voteNo = await Vote.findOneAndUpdate(
				{
					createdBy: req.user.userId,
					topic: topicId,
					design: design,
				},
				{
					vote: false,
					createdBy: req.user.userId,
					topic: topicId,
					detail: {},
				},
				{ new: true, upsert: true, setDefaultsOnInsert: true }
			);
			return res.status(StatusCodes.OK).json(voteNo);
		}
		// Using upsert option (creates new doc if no match is found):
		const topic = await Topic.findById(topicId);
		voteFields.topic = topic;
		let vote = await Vote.findOneAndUpdate(
			{ createdBy: req.user.userId, topic: topicId, design: design },
			{ $set: voteFields },
			{ new: true, upsert: true, setDefaultsOnInsert: true }
		);
		return res.status(StatusCodes.OK).json(vote);
	} catch (err) {
		console.error(err.message);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.send("Server Error");
	}
};

const getAllVotes = async (req, res) => {
	const allVotes = await Vote.find();
	res.status(StatusCodes.OK).json({ allVotes });
};

const getVotes = async (req, res) => {
	const votes = await Vote.find({ createdBy: req.params.userid });
	res.status(StatusCodes.OK).json({ votes });
};

const deleteVote = async (req, res) => {
	try {
		const id = req.params.id;
		await Vote.findByIdAndDelete(id);
		return res.status(StatusCodes.OK).json("Vote have been deleted");
	} catch (error) {
		console.error(err.message);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.send("Server Error");
	}
};

export { createOrUpdateVote, getVotes, deleteVote, getAllVotes };
