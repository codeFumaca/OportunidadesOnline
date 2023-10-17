import User from '../models/user.model.js';

export const createService = async (body) => User.create(body);

export const findAllService = async () => User.find();

export const findByIdService = (id) => User.findById(id);

export const deleteByIdService = (id) => User.findByIdAndDelete(id);

export const updateService = (id, email ,name, password, telefone, cep) => User.findOneAndUpdate({ _id: id }, { name, email, password, telefone, cep })