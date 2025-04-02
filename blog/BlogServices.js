import Blog from '../model/BlogsModel.js'

export async function createBlogPost({ description, genre, userID }) {
    const blog = new Blog({
        description,
        genre,
        userID
    });
    await blog.save();
}