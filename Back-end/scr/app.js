import express from 'express';
import fs from 'fs';
import { join } from 'path';

const app = express()

app.use(express.json())
app.use(express.static(join('../', 'Front-end'))); // Ler arquivos css

app.post('/addlist', (req, res) => { // Criar
    selecoes.push(req.body);
    res.status(201).send("Seleção cadastrada com sucesso!");
});

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

app.get('/list', (req, res) => { // Buscar
    res.status(200).send(selecoes);
});

app.put('/list/:id', (req, res) => { // Atualizar
    let index = buscarIndiceSelecaoPorId(req.params.id)
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;
    res.send('Seleção atualizada com sucesso!').status(200)
});

app.delete('/list/:id', (req, res) => { // Deletar
    let index = buscarIndiceSelecaoPorId(req.params.id)
    selecoes.splice(index, 1)
    res.send('Seleção retirada da lista!').status(200)
});

export default app;