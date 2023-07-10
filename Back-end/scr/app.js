import express from 'express';
import { join } from 'path';
import routes from './routes/routes.js'

const app = express()

app.use(express.json())
app.use(express.static(join('../', 'Front-end'))); // Ler arquivos css
app.use(routes)

export default app;
