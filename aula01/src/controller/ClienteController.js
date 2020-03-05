/**
 * para importar o modulo ou classe
 * Cliente com a função require
 * (forma antiga do JS)
 */
//const Cliente = require ('../model/Cliente');

//Importa a classe cliente com a palavra reservada import(forma mais moderna - ES6)
import Cliente from '../model/Cliente'

/**
 * Exporta (deixa pública) a classe
 * Cliente com a forma mais moderna(ES6) 
 */
export default class ClienteController 
{
    criarCliente(nome, endereco, cpf, telefone)
    {
        /**
         * Está instanciando um novo objeto da classe Cliente
         */
        //foi adicionado dentro do () de Cliente nome,endereco, cpf telefone.
        let cliente = new Cliente(nome, endereco, cpf, telefone);
        //preenchemento do cliente
        //cliente.nome = nome;
        //cliente.cpf = cpf;
        //cliente.endereco = endereco;
        //cliente.telefone = telefone;
        //irá retorna os valores da instância
        return cliente;
    }
}
//foi modificado para a forma mais moderna la em cima
//module.exports = ClienteController;