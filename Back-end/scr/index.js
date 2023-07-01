import express from 'express';
import fs from 'fs';
import { join } from 'path';
import PerfilController from './app/controllers/PerfilController.js';

const app = express()

app.use(express.json())
app.use(express.static(join('../', 'Front-end'))); // Ler arquivos css

// ROTAS
app.get('/', (req, res) => { // Página Principal

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

app.post('/addprofile', PerfilController.store);

app.get('/profiles', PerfilController.index);

app.get('/profiles/search/id/:id', PerfilController.show);

app.get('/profiles/search/nome/:nome', PerfilController.showbyname);

app.put('/profiles/att/:id', PerfilController.update);

app.delete('/profiles/delete/:id', PerfilController.delete);

export default app;
