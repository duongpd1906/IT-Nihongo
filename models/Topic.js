import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
	topicName: {
		type: String,
		require: true,
		unique: true,
	},
	createdBy: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: [true, "Please provide user"],
	},
	list_img: [
		{
			image: {
				type: String,
			},
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model("Topic", TopicSchema);
