import { createBlogPost } from "./BlogServices.js"


export const BlogController = async function (req, res) {
    const { description, genre = "Politics" } = req.body
    if (!description || description.length > 500) {
        return res.status(400).json({ message: "Invalid description" })
    }
    await createBlogPost({ userID: req.userId, description, genre });
    res.status(201).json({ message: "Blog post created successfully" })
}
