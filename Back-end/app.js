const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express()
const port = 3000;

app.use(express.static(path.join(__dirname, '../', 'Front-end')));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../', 'Front-end', 'index.html');

    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            console.log('Erro:', error);
            return res.status(500).send('Erro ao ler o arquivo HTML');
        }

        res.contentType('html');
        res.status(200).send(data);
    });
});

app.get('/login', (req, res) => {
    const filePath = path.join(__dirname, '../', 'Front-end', 'login.html');

    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            console.log('Erro:', error);
            return res.status(500).send('Erro ao ler o arquivo HTML');
        }

        res.contentType('html');
        res.status(200).send(data);
    });
});

app.get('/register', (req, res) => {
    const filePath = path.join(__dirname, '../', 'Front-end', 'register.html');

    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            console.log('Erro:', error);
            return res.status(500).send('Erro ao ler o arquivo HTML');
        }

        res.contentType('html');
        res.status(200).send(data);
    });
});

app.get('/dashboard', (req, res) => {
    const filePath = path.join(__dirname, '../', 'Front-end', 'dashboard.html');

    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            console.log('Erro:', error);
            return res.status(500).send('Erro ao ler o arquivo HTML');
        }

        res.contentType('html');
        res.status(200).send(data);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})


