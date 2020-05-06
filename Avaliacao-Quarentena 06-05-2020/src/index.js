import * as db from './config/db';
import ProdutoController from './controllers/ProdutoController';
import Produto from './models/Produto';

const prodCtrl = new ProdutoController();

let listarProdutos = async () =>
{
    db.conectarBD();

    const produto = new Produto
    ({
        descricao: 'Alimento Achocolatodo em Pó Nescau 2.0',
        quantidade: '1',
        marca: 'Nestle'
    });
    const prodSave = await prodCtrl.salvar(produto);
    console.log(prodSave);
    
    db.desconectarBD();
}
listarProdutos();


/*
{lista de CRUD}

{criar ou salvar produtos}
let listarProdutos = async () =>
{
    db.conectarBD();

    const produto = new Produto
    ({
        descricao: 'Leite Liht Integral 1l',
        quantidade: '2',
        marca: 'Piracanjuba'
    });
    const prodSave = await prodCtrl.salvar(produto);
    console.log(prodSave);

    db.desconectarBD();
}
listarProdutos();

{leitura dos dados de produtos}
let listarProdutos = async () =>
{
    db.conectarBD();
-------------------[leitura de todos]----------------
    const produtos = await prodCtrl.recuperarTodos();
    console.log(produtos);
--------[leitura por frase,letra ou palavra]---------
    //{independente do formato da frase sendo
    //maiusculo ou minusculo, e conter a tal letra
    //ou palavra, exibira tal produto no console}
    
    const produtos = await 
    prodCtrl.recuperarPorDesc
    (
        's'
    );
    produtos.forEach(produto => console.log(produto));
-------------[leitura por identificacão]--------------
    const produto = await 
    prodCtrl.recuperarPeloId
    (
        '5eace90f9cfd0036e4a653a4'
    );
    console.log(produto);
-------------------------------------------------------
    db.desconectarBD();
}
listarProdutos();

{Atualizar produto}
let listarProdutos = async () =>
{
    db.conectarBD();

    
    let produto = await 
    prodCtrl.recuperarPeloId
    (
        '5eace90f9cfd0036e4a653a4'
    );
    produto.quantidade = '2';
    const atualizarProd = await prodCtrl.salvar(produto);
    console.log(atualizarProd);


    db.desconectarBD();
}
listarProdutos();

{Remover Produto duplicado ou não}
let listarProdutos = async () =>
{
    db.conectarBD();

    const resp = await prodCtrl.remove
    (
        '5eafb9a16b60ef1f604d4f7f'
    );
    console.log(resp);
    
    db.desconectarBD();
}
listarProdutos();

*/