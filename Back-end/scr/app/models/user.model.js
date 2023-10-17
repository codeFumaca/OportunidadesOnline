import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    createdAt: { type: Date, default: Date.now },
    cep: { type: String, required: true },
    telefone: { type: String, required: true },
});

UserSchema.pre("save", async function (next) { // Criptografar a senha antes de salvar no banco de dados
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("User", UserSchema);

export default User;