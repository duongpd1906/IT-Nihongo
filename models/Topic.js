import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
    topicName: {
        type: String,
        require: true,
        unique: true,
    },
    image: {
        type: String,
        require: true,
    }
})

export default mongoose.model("Topic", TopicSchema);