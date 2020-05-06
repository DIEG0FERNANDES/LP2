import mongoose from 'mongoose';

const esquema = new mongoose.Schema({
    nome: {
        type: String, 
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: String,
    dataNascimento: Date
});

const Contato = mongoose.model('Contato', esquema);

export default Contato;