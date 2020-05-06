import ClienteController from './controller/ClienteController';

let nome = 'João da Silva';
let telefone = '(67) 99999-9999';
let endereco = 'Rua 6 de dezembro, 77';
let cpf = '11111111111';

// Instanciar um controlador
let clienteCtrl = new ClienteController();

// Cria um novo objeto de Cliente
let cliente = clienteCtrl.criarCliente(nome, endereco, cpf, telefone);

// Exibe o objeto de cliente no Console
console.log(cliente);
