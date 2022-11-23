import { StatusCodes } from "http-status-codes";
import Topic from "../models/Topic.js";
import checkPermissions from "../utils/checkPermissions.js";

const createTopic = async (req, res) => {
	const topicName = req.body.topicName;
	const createdBy = req.user.userId;
	const image = "http://127.0.0.1:5000/images/" + req.file.filename;
	try {
		const topic = await Topic.create({ topicName, createdBy });
		const newImage = {
			image: image,
		};
		await topic.updateOne({ $push: { list_img: newImage } });
		res.status(StatusCodes.OK).json({ msg: "Create topic Success" });
	} catch (error) {
		console.error(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

const getAllTopic = async (req, res) => {
	try {
		let results = Topic.find().populate("createdBy");
		const totalTopics = await Topic.countDocuments(results);

		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 4;
		const skip = (page - 1) * limit;

		results.skip(skip).limit(limit);

		const topics = await results;

		const numOfPages = Math.ceil(totalTopics / limit);

		res.status(StatusCodes.OK).json({ topics, totalTopics, numOfPages });
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

const deleteTopic = async (req, res) => {
	const { id: id } = req.params;

	const topic = await Topic.findOne({ _id: id });

	if (!topic) {
		throw new NotFoundError(`No topic with id :${id}`);
	}

	checkPermissions(req.user, topic.createdBy);

	await topic.remove();

	res.status(StatusCodes.OK).json({ msg: "Success! Topics removed" });
};

export { createTopic, updateTopic, getAllTopic, deleteTopic };
