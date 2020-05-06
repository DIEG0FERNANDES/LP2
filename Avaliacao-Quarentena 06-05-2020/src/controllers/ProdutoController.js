import Produto from '../models/Produto';

export default class ProdutoController 
{
    /**
     * criar ou salvar produto considerando que ja esta
     * recebendo os dados de descricao, quantidade e
     * marca do produto
     */
    async salvar(produto)
    {
        const prodSave = await Produto.create(produto);
        return prodSave;
    }

    /**
     * funcão que lê e ou recupera todos os dados
     */
    async recuperarTodos()
    {
        const produtos = await Produto.find();
        return produtos;
    }

    /**
     * funcão que lê os dados por descricão
     */
    async recuperarPorDesc(descConsulta)
    {
        const produtos = await Produto.find
        ({
            descricao:
            {
                //filtro da consulta
                '$regex': descConsulta,
                '$options': 'i'
            }
        });
        return produtos;
    }

    /**
     * retorna apenas o produto especifico
     * por identificacão
     */
    async recuperarPeloId(id)
    {
        const produto = await Produto.findById(id);
        return produto;
    }

    /**
     * deleta um unico registro de dados de um produto
     * duplicado ou não duplicado
     */
    async remove(id)
    {
        const resp = await Produto.deleteOne
        ({
            _id: id
        });
        return resp;
    }
}