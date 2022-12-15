import { StatusCodes } from "http-status-codes";
import Comment from "../models/Comment.js";

const getCommentsByDesignId = async (req, res) => {
	const commentsByDesignId = await Comment.find({
		design: req.params.id,
	})
		.populate("topic", ["topicName", "list_img"])
		.populate("createdBy");
	res.status(StatusCodes.OK).json({ commentsByDesignId });
};

const getAllComments = async (req, res) => {
	const allComments = await Comment.find()
		.populate("topic", ["topicName", "list_img"])
		.populate("createdBy");
	res.status(StatusCodes.OK).json({ allComments });
};

const getCommentsOfMe = async (req, res) => {
	const myComments = await Comment.find({
		createdBy: req.user.userId,
	}).populate("topic", ["topicName", "list_img"]);
	res.status(StatusCodes.OK).json({ myComments });
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
		console.error(error.message);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.send("Server Error");
	}
};

const updateComment = async (req, res) => {
	try {
		const id = req.params.id;
		const textComment = req.body.text;
		console.log(req.body);
		const newComment = await Comment.findByIdAndUpdate(
			id,
			{ text: textComment, createdAt: new Date() },
			{
				new: true,
			}
		);
		console.log(newComment);
		res.status(StatusCodes.OK).json(newComment);
	} catch (error) {
		console.error(error.message);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.send("Server Error");
	}
};

export {
	getCommentsByDesignId,
	createNewComments,
	getCommentsOfMe,
	getAllComments,
	deleteComment,
	updateComment,
};
