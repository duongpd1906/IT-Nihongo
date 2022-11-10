import { StatusCodes } from "http-status-codes";
import Topic from "../models/Topic.js";
import checkPermissions from "../utils/checkPermissions.js";

const createTopic = async (req, res) => {
	const topicName = req.body.topicName;
	const createdBy = req.user.userId;
	const image = "http://127.0.0.1:5000/images/" + req.file.filename;
	try {
		const topic = await Topic.create({ topicName, createdBy, image });
		res.status(StatusCodes.OK).json({ topic });
	} catch (error) {
		console.log(error);
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
			"SOME THING WENT WRONG"
		);
	}
};

const getAllTopic = async (req, res) => {
	try {
		const tpoics = await Topic.find().populate("createdBy");
		res.status(StatusCodes.OK).json(tpoics);
	} catch (error) {
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
	const updatedTopic = await Topic.findOneAndUpdate(
		{ _id: id },
		{ topicName, image },
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

	res.status(StatusCodes.OK).json({ msg: "Success! Job removed" });
};

export { createTopic, updateTopic, getAllTopic, deleteTopic };
