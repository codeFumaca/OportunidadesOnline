import { Router } from "express";
import fs from 'fs';
import PerfilController from '../app/controllers/PerfilController.js';

const router = Router()

// ROTAS UTILIZADAS PARA FAZER REQUISIÇÕES AO SERVIDOR
router.get('/', (req, res) => { // SOLICITA OS ARQUIVOS DA PÁGINA INICIAL AO SERVIDOR, QUE RETORNA O ARQUIVO HTML DA PÁGINA.

    const filePath = join('../', 'Front-end', 'index.html');

    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            console.log('Erro:', error);
            return res.status(500).send('Erro ao ler o arquivo HTML');
        }

        res.contentType('html');
        res.status(200).send(data);
    })
});

router.get('/register', (req, res) => { // SOLICITA OS ARQUIVOS DA PÁGINA DE REGISTRO AO SERVIDOR, QUE RETORNA O ARQUIVO HTML DA PÁGINA.

    const filePath = join('../', 'Front-end', 'register.html');

    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            console.log('Erro:', error);
            return res.status(500).send('Erro ao ler o arquivo HTML');
        }

        res.contentType('html');
        res.status(200).send(data);
    })
});

router.get('/login', (req, res) => {// SOLICITA OS ARQUIVOS DA PÁGINA DE LOGIN AO SERVIDOR, QUE RETORNA O ARQUIVO HTML DA PÁGINA.

    const filePath = join('../', 'Front-end', 'login.html');

    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            console.log('Erro:', error);
            return res.status(500).send('Erro ao ler o arquivo HTML');
        }

        res.contentType('html');
        res.status(200).send(data);
    })
});

router.post('/addprofile', PerfilController.store);

router.get('/profiles', PerfilController.index);

router.get('/profiles/search/id/:id', PerfilController.show);

router.get('/profiles/search/nome/:nome', PerfilController.showbyname);

router.put('/profiles/att/:id', PerfilController.update);

router.delete('/profiles/delete/:id', PerfilController.delete);

export default router;