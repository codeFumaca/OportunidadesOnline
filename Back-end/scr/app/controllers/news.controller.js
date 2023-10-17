import { createService, findAllService, countNewsService, topNewsService, findByIDService, searchByTitleService, findAllUserNewsService, updateService, deleteService, likeNewsService, deletelikeNewsService, addCommentService, deleteCommentService } from "../services/news.service.js";

export const createController = async (req, res) => {
    try {
        const { tittle, text, banner } = req.body;

        const news = await createService({ tittle, text, banner, author: req.UserId, });

        if (!news) {
            return res.status(400).send({ message: 'Erro ao criar notícia' })
        }

        res.status(201).send({ message: 'Notícia criada com sucesso' })

    }
    catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

export const findAllController = async (req, res) => {
    let { limit, offset } = req.query;

    limit = Number(limit);
    offset = Number(offset);

    if (!limit) { limit = 5; }
    if (!offset) { offset = 0; }

    try {
        const news = await findAllService(offset, limit);
        const total = await countNewsService();
        const currentUrl = req.baseUrl;

        const next = offset + limit;
        const nextUrl = next < total ? `${currentUrl}?offset=${next}&limit=${limit}` : null;

        const previus = offset - limit < 0 ? null : offset - limit;
        const previusUrl = previus != null ? `${currentUrl}?offset=${previus}&limit=${limit}` : null;

        if (news.length === 0) {
            return res.status(400).send({ message: 'Nenhuma notícia encontrado' })
        }
        res.status(200).send({
            previusUrl, nextUrl, limit, offset, total, results: news.map(item => ({
                id: item._id,
                tittle: item.tittle,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                author: item.author.name,
                authorId: item.author._id,
            }))
        });
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

export const topNewsController = async (req, res) => {
    try {

        const news = await topNewsService();

        if (!news) {
            return res.status(400).send({ message: 'Erro ao buscar notícias' })
        }
        res.status(200).send({
            news: {
                id: news._id,
                tittle: news.tittle,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                author: news.author.name,
                authorId: news.author._id,
            }
        });

    }
    catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

export const findByIDController = async (req, res) => {
    try {
        const { id } = req.params;

        const news = await findByIDService(id);

        if (!news) {
            return res.status(400).send({ message: 'Erro ao buscar notícia' })
        }
        res.status(200).send({
            news: {
                id: news._id,
                tittle: news.tittle,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                author: news.author.name,
            }
        });
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

export const findByTitleController = async (req, res) => {
    try {
        const { title } = req.query;

        const news = await searchByTitleService(title);

        if (news.length === 0) {
            return res.status(400).send({ message: 'Nenhuma notícia encontrado' })
        }
        return res.status(200).send({
            results: news.map(item => ({
                id: item._id,
                tittle: item.tittle,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                author: item.author.name,
            }))
        });
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

export const findByUserController = async (req, res) => {
    try {
        const iduser = req.UserId;

        const news = await findAllUserNewsService(iduser);

        if (news.length === 0) {
            return res.status(400).send({ message: 'Nenhuma notícia encontrado' })
        }

        return res.status(200).send({
            results: news.map(item => ({
                id: item._id,
                tittle: item.tittle,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                author: item.author.name,
            }))
        });

    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

export const updateController = async (req, res) => {
    try {

        const { text, banner, tittle } = req.body;
        const userid = req.UserId;
        const newsid = req.params.id;

        const news = await findByIDService(newsid);

        if (String(news.author._id) !== String(userid)) {
            return res.status(400).send({ message: 'Você não tem permissão para editar essa notícia' })
        }

        await updateService(newsid, text, banner, tittle);
        return res.status(200).send({ message: 'Notícia atualizada com sucesso' });

    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

export const deleteController = async (req, res) => {
    try {
        const newsid = req.params.id;
        const userid = req.UserId;

        const news = await findByIDService(newsid);

        if (String(news.author._id) !== String(userid)) {
            return res.status(400).send({ message: 'Você não tem permissão para deletar essa notícia' })
        }

        await deleteService(newsid);
        return res.status(200).send({ message: 'Notícia deletada com sucesso' });

    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

export const likeNewsController = async (req, res) => {
    try {
        const { id } = req.params;
        const userid = req.UserId;

        const newsLiked = await likeNewsService(id, userid);

        if (!newsLiked) {
            await deletelikeNewsService(id, userid);
            return res.status(200).send({ message: 'Notícia descurtida com sucesso' });
        }

        return res.status(200).send({ message: 'Notícia curtida com sucesso' });

    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

export const addCommentController = async (req, res) => {
    try {
        const { id } = req.params;
        const userid = req.UserId;
        const { comment } = req.body;

        if (!comment) {
            return res.status(400).send({ message: 'Escreva um comentário' })
        }

        await addCommentService(id , userid, comment);
        return res.status(200).send({ message: 'Comentário adicionado com sucesso' });

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const deleteCommentController = async (req, res) => {
    try{
        const { idComment, idNews } = req.params;
        const userid = req.UserId;

        const commentDeleted = await deleteCommentService(idNews, idComment, userid);
        
        const commentFinder = commentDeleted.comments.find((comment) => comment.idComment === idComment);

        if(!commentFinder){
            return res.status(400).send({ message: 'Comentário não encontrado' })
        }

        if (String(commentFinder.idUser) !== String(userid)) {
            return res.status(400).send({ message: 'Você não tem permissão para deletar esse comentário' })
        }

        return res.status(200).send({ message: 'Comentário deletado com sucesso' });

    } catch (err){
        return res.status(500).send({ message: err.message })
    }
}