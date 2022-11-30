import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema({
	vote: {
		type: Boolean,
		required: true,
	},
	createdBy: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: [true, "Please provide user"],
	},
	topic: {
		type: mongoose.Types.ObjectId,
		ref: "Topic",
		required: [true, "Please provide topic"],
	},
	design: {
		type: String,
	},
	detail: {
		amount: {
			type: String,
		},
		position: {
			type: String,
		},
		description: {
			type: String,
		},
	},
});

export default mongoose.model("Vote", VoteSchema);
