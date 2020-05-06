import ArrecadacaoDAO from './ArrecadacaoDAO';

let dao;

describe('Testa o DAO de arrecadação de compensação financeira pela exploração mineral no Paraná', () => {

    beforeAll(() => {
        dao = new ArrecadacaoDAO();
    });

    test('deve carregar a arrecadação de 182 cidades', () => {
        let municipios = dao.carregarListaDeArrecadacaoPorCidade();
        expect(municipios.length).toBe(182);
    });

    test('deve carregar a arrecadação estadual correta de um ano específico', () => {
        let arrecadacao = dao.carregarArrecadacaoEstadualPorAno(2010);
        expect(arrecadacao).toBe(7214821.82);
    });
});