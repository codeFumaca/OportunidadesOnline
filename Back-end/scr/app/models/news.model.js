import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({ // Schema das notiiias

    tittle: { type: String, required: true },
    text: { type: String, required: true },
    banner: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" , required: true},
    likes: { type: Array, required: true },
    comments: { type: Array, required: true }
});

const News = mongoose.model("News", NewsSchema); // Model das notícias

export default News;