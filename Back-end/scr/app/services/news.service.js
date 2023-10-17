import News from '../models/news.model.js';

export const createService = async (body) => News.create(body);

export const findAllService = async (offset, limit) => News.find().populate('author').sort({ _id: -1 }).limit(limit).skip(offset);

export const countNewsService = async () => News.countDocuments();

export const topNewsService = async () => News.findOne().sort({ _id: -1 }).populate('author');

export const findByIDService = async (id) => News.findById(id).populate('author');

export const searchByTitleService = async (tittle) => News.find({ tittle: { $regex: `${tittle || ""}`, $options: 'i' } }).populate('author').sort({ _id: -1 });

export const findAllUserNewsService = async (id) => News.find({ author: id }).sort({ _id: -1 });

export const updateService = async (idNews, text, banner, tittle) => News.findOneAndUpdate({ _id: idNews }, { text, banner, tittle }, { includeResultMetadata: false, });

export const deleteService = async (idNews) => News.findOneAndDelete({ _id: idNews });

export const likeNewsService = async (idNews, idUser) => News.findOneAndUpdate({ _id: idNews, "likes.idUser": { $nin: [idUser] } }, { $push: { likes: { idUser, created: new Date } } }, { new: true });

export const deletelikeNewsService = async (idNews, idUser) => News.findOneAndUpdate({ _id: idNews }, { $pull: { likes: { idUser } } });

export const addCommentService = async (idNews, idUser, comment) => {
    const idComment = Math.floor(Date.now() * Math.random()).toString(36)

    return News.findByIdAndUpdate({ _id: idNews }, { $push: { comments: { idComment, idUser, comment, createdAt: new Date } } });
};

export const deleteCommentService = async (idNews, idComment, idUser) => News.findByIdAndUpdate({ _id: idNews }, { $pull: { comments: { idComment, idUser }}});;