/**
 * Exporta (deixa pública) a classe
 * Cliente com a forma mais moderna(ES6) 
 */

export default class Cliente
{
    /**
     * Cria um objeto (Indíviduo/Instância) de uma determinada classe
     */
    //foi adicionado depois nome, endereco, cpf, telefone dentro de () do cosntructor
    constructor(nome, endereco, cpf, telefone) 
    {
        /**
         * this é um operador de referência ao objeto
         */

         /**
          * this.nome = '';
          * this.endereco = '';
          * this.cpf = '';
          * this.telefone = '';
          */
         
        this.nome = nome;
        this.endereco = endereco;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}

/**
 * Exporta (deixa pública) a classe Cliente na forma antiga (old school) do JS
 */
//foi modificado para a forma mais moderna la em cima
//module.exports = Cliente;