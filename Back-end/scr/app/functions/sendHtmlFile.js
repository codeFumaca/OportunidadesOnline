import fs from 'fs';
import { join } from 'path';

export function sendHtmlFile(res, filePath) {
    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            console.log('Erro:', error);
            return res.status(500).send('Erro ao ler o arquivo HTML');
        }

        res.contentType('html').status(200).send(data);
    });
}