import mongoose from "mongoose";

const connectar = async () => {
    console.log("Conectando ao MongoDB...");

    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("Conectado com sucesso!");
            })
    }
    catch (err) {
        throw err;
    }
}

export default connectar;