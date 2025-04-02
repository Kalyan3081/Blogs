import mongoose, { Schema } from "mongoose";


const BlogSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    userID: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true,
        default: "politics"
    }
});

const Blog = mongoose.model("Blog", BlogSchema);
export default Blog