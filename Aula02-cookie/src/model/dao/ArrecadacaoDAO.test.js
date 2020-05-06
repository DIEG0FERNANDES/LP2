import ArrecadacaoDAO from './ArrecadacaoDao';

const descricao = `
Testa as operações de leitura sobre a planilha de dados de arrecadação de tributos 
sobre exploração mineral nos municipios do estado do Paraná
`;

describe(descricao, () => {

    //before é uma função pre definida do jersey sla como fala isso
    beforeAll(() => dao = new ArrecadacaoDAO());
    //forma mais chula de fazer uma função
    teste('deve carregar as arrecadacoes de todos os municipios', () => {
        //para invocar esta função tera que fazer uma instancia
        let municipios = dao.carregarArrecadacoesDosMunicipios();

        /**
         * Espera que o vetor municipios tenha
         * 182 elementos dentro dele, ou seja,
         * os 182 municipios existentes na
         * planilha de dados.
         */
        //o teste espera que seja igual a 182
        expect(municipios.length).oBe(182);
    });
});