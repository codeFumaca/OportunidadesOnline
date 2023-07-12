import fs from 'fs';

/**
 * Utilizado para enviar uma página html pelo servidor. Servidor -> Usuário
 * @param {*} res Resposta do servidor.
 * @param {*} filePath Local ho arquivo html
 */
export function sendHtmlFile(res, filePath) {
    fs.readFile(filePath, 'utf-8', (error, data) => {
        if (error) {
            console.log('Erro:', error);
            return res.status(500).send('Erro ao ler o arquivo HTML');
        }

        res.contentType('html').status(200).send(data);
    });
}