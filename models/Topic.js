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
	image: {
		type: String,
	},
});

export default mongoose.model("Topic", TopicSchema);
