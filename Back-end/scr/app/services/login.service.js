import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

const loginService = async (email) => User.findOne({ email: email }).select('+password');

const generateToken = (id) =>
    jwt.sign({ id: id }, process.env.SECRET, {
        expiresIn: 86400 // expires in 24 hours
    });


export { loginService, generateToken };