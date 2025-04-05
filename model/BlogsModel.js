// Model it defines the database schema

import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userID: {
        type: String,
        required: true
    }
})

const BlogSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    genre: {
        type: String,
        required: true,
        default: "politics"
    },
    comments: [CommentSchema]
});

const Blog = mongoose.model("Blog", BlogSchema);
export default Blog