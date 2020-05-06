import fs from 'fs';
import path from 'path';
import excelToJson from 'convert-excel-to-json';

import Municipio from '../entity/Municipio';
import {ANOS} from '../../constants/colunas';

export default class ArrecadacaoDAO {

    carregarListaDeArrecadacaoDosMunicipios() {
        let municipios = [];

        /**
         * Aponta para o arquivo
         * da planilha de dados
         */

        let dados = this.extrairDadosDaPlanilha('A4:P185')
        
        dados.Plan1.forEach(elemento => {
            let nome = elemento.A;
            /**
             * Object.values devolve todos os valores
             * das propriedades existentes dentro de um
             * objeto
             */
            
            let valores = Object.values(elemento);
            let arrecadacoes = valores.slice(1,valores.length);
            let municipio = new Municipio(nome, arrecadacoes);
            municipios.push(municipios);
        });

        return municipios;
    }
    
    carregarArrecadacaoPorAno(ano) {
        if (ano in ANOS) {
            let coluna = ANOS[ano];
            let range = `${coluna}4:${coluna}185`
        }
        let arrecadacoes = this.extrairDadosDaPlanilha(range);
        let nomeMunicipios = this.extrairDadosDaPlanilha('A4:P185');
        console.log(arrecadacoes);
        console.log(nomeMunicipios);
    }
    extrairDadosDaPlanilha(range)
    {
        let caminhoArquivo = path.resolve(__dirname,'../../data/dados.xls');

        let dados = excelToJson({
            source: fs.readFileSync(caminhoArquivo),
            range: 'A4:P185'
        });
        
        return dados;
    }
}