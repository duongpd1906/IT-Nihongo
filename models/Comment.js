import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
	design: {
		type: String,
		required: true,
	},
	createdBy: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model("Comment", CommentSchema);
