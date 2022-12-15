import { StatusCodes } from "http-status-codes";
import Topic from "../models/Topic.js";
import Comment from "../models/Comment.js";
import Vote from "../models/Vote.js";
import checkPermissions from "../utils/checkPermissions.js";

const createTopic = async (req, res) => {
	const topicName = req.body.topicName;
	const createdBy = req.user.userId;
	const image = "http://127.0.0.1:5000/images/" + req.file.filename;
	try {
		const count = await Topic.find({ topicName: topicName }).count();
		if (count === 0) {
			const topic = await Topic.create({ topicName, createdBy });
			const newImage = {
				image: image,
			};
			await topic.updateOne({ $push: { list_img: newImage } });
			res.status(StatusCodes.OK).json({ msg: "Create topic Success" });
		} else {
			const topic = await Topic.findOne({ topicName: topicName });
			checkPermissions(req.user, topic.createdBy);
			const newImage = {
				image: image,
			};
			await topic.updateOne({ $push: { list_img: newImage } });
			res.status(StatusCodes.OK).json({ msg: "Add Image Success" });
		}
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

const getAllTopic = async (req, res) => {
	try {
		let results = Topic.find().populate("createdBy");
		const totalTopics = await Topic.countDocuments(results);

		const limit = 4;

		const numOfPages = Math.ceil(totalTopics / limit);

		const listTopics = [];
		for (let i = 1; i <= numOfPages; i++) {
			const test2 = Topic.find().populate("createdBy");
			const skip = (i - 1) * limit;
			const test = test2.skip(skip).limit(limit);
			const topics = await test;
			listTopics.push({ topics: topics });
		}

		res.status(StatusCodes.OK).json({ listTopics });
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

const getAllTopicsAdmin = async (req, res) => {
	try {
		const allTopics = await Topic.find().populate("createdBy");
		res.status(StatusCodes.OK).json({ allTopics });
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

const updateTopic = async (req, res) => {
	const { id: id } = req.params;

	const topic = await Topic.findOne({ _id: id });
	if (!topic) {
		throw new NotFoundError(`No topic with id :${id}`);
	}

	const topicName = req.body.topicName;
	const image = "http://127.0.0.1:5000/images/" + req.file.filename;

	checkPermissions(req.user, topic.createdBy);

	const newImage = {
		image: image,
	};
	const updatedTopic = await Topic.findOneAndUpdate(
		{ _id: id },
		{ topicName },
		{
			$push: {
				list_image: newImage,
			},
		},
		{
			new: true,
			runValidators: true,
		}
	);
	res.status(StatusCodes.OK).json({ updatedTopic });
};

const getMyTopics = async (req, res) => {
	const myTopics = await Topic.find({ createdBy: req.user.userId });
	res.status(StatusCodes.OK).json({ myTopics });
};

const deleteDesign = async (req, res) => {
	const topicId = req.params.id;
	const designId = req.params.designId;
	const topic = await Topic.findById(topicId);

	if (!topic) {
		throw new NotFoundError(`No topic with id :${req.params.id}`);
	}

	topic.list_img = topic.list_img.filter(({ _id }) => _id != designId);

	await topic.save();
	await Comment.deleteMany({ design: designId });
	await Vote.deleteMany({ design: designId });

	res.status(StatusCodes.OK).json(topic);
};

const deleteTopic = async (req, res) => {
	const { id: id } = req.params;

	const topic = await Topic.findOne({ _id: id });

	if (!topic) {
		throw new NotFoundError(`No topic with id :${id}`);
	}

	await Comment.deleteMany({ topic: id });
	await Vote.deleteMany({ topic: id });

	await topic.remove();

	res.status(StatusCodes.OK).json({ msg: "Success! Topics removed" });
};

export {
	createTopic,
	updateTopic,
	getAllTopic,
	deleteTopic,
	getMyTopics,
	getAllTopicsAdmin,
	deleteDesign,
};
