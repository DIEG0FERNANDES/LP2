//chamando o script ClienteController
//foi modificado para a forma mais moderna
//const ClienteController = require ('./controller/ClienteController');
import ClienteController from './controller/ClienteController';

let nome = 'João da Silva';
let telefone = '(67) 99999-9999';
let endereco = 'Rua 6 de dezembro, 77';
let cpf = '11111111111';

/**
 * Instanciar um controlador
 */
 let clienteCtrl = new ClienteController();

 /**
  * Criar um novo objeto de cliente
  */
let cliente = clienteCtrl.criarCliente(nome, endereco, cpf, telefone);

//exibe o objeto de cliente no Console do VsCode
console.log(cliente);

//foi modificado para uma forma mais moderna
//const Cliente =require('./model/Cliente');
//let cliente2 = new Cliente();
//console.log(cliente2);