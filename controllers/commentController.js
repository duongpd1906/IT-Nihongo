import { StatusCodes } from "http-status-codes";
import Comment from "../models/Comment.js";

const getComments = async (req, res) => {
	const comments = await Comment.find({
		design: req.params.designId,
	}).populate("createdBy");
	res.status(StatusCodes.OK).json({ comments });
};

const getAllComments = async (req, res) => {
	const getAllComments = await Comment.find();
	res.status(StatusCodes.OK).json({ getAllComments });
};

const getCommentsOfMe = async (req, res) => {
	const commentsOfMe = await Comment.find({
		createdBy: req.user.userId,
	}).populate("topic", ["topicName", "list_img"]);
	res.status(StatusCodes.OK).json({ commentsOfMe });
};

const createNewComments = async (req, res) => {
	try {
		const text = req.body.text;
		const design = req.body.design;
		const createdBy = req.user.userId;
		const topic = req.body.topic;
		let comment = await Comment.create({ text, design, createdBy, topic });
		res.status(StatusCodes.OK).json({ comment });
	} catch (error) {
		console.log(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
			"SOME THING WENT WRONG"
		);
	}
};

const deleteComment = async (req, res) => {
	try {
		const id = req.params.id;
		await Comment.findByIdAndDelete(id);
		return res.status(StatusCodes.OK).json("Comment have been deleted");
	} catch (error) {
		console.error(err.message);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.send("Server Error");
	}
};

export {
	getComments,
	createNewComments,
	getCommentsOfMe,
	getAllComments,
	deleteComment,
};
