import { StatusCodes } from "http-status-codes";
import Comment from "../models/Comment.js";

const getComments = async (req, res) => {
	const comments = await Comment.find({ design: req.params.id }).populate(
		"createdBy"
	);
	res.status(StatusCodes.OK).json({ comments });
};

const createNewComments = async (req, res) => {
	try {
		const text = req.body.text;
		const design = req.body.design;
		const createdBy = req.user.userId;
		let comment = await Comment.create({ text, design, createdBy });
		res.status(StatusCodes.OK).json({ comment });
	} catch (error) {
		console.log(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
			"SOME THING WENT WRONG"
		);
	}
};

export { getComments, createNewComments };
