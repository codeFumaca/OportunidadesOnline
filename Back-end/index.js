import app from "./scr/app.js";
import connectar from "./scr/app/database/db.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

try {
    await connectar();
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });

} catch (err) {
    console.log("Erro ao conectar:", err.message);
}