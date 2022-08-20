const adiciona_hifen = require('./algoritmo5');
const sequencia = require("./algoritmo5.json");

    test('Verifica se tem algum valor nulo, não definido, vazio ou NaN', () => {
        for (let i = 0; i < sequencia.sequenciaInput.sequencia.length; i++) {
          expect(sequencia.sequenciaInput.sequencia[i] == undefined).not.toBeUndefined();
          expect(sequencia.sequenciaInput.sequencia[i] == null).not.toBeNull();
          expect(sequencia.sequenciaInput.sequencia[i] == 0).not.toBeTruthy();
          expect(sequencia.sequenciaInput.sequencia[i] == NaN).not.toBeTruthy();
        }
      });
      
      test("Verifica se é uma string os valores", () => {
        for (let i = 0; i < sequencia.sequenciaInput.sequencia.length; i++) {
          expect((typeof sequencia.sequenciaInput.sequencia[i]) == "string").toBeTruthy();
        }
      });
      
      test('Teste normal de cada caso', () => {
        for (let i = 0; i < sequencia.sequenciaInput.sequencia.length; i++) {
          expect(adiciona_hifen(sequencia.sequenciaInput.sequencia[i])).toBe(sequencia.sequenciaOutput.sequencia[i]);
        }
      });
      
      test('Verifica se o json de teste e o json resultante está igual', () => {
        let sequenciaList = [];
        for (let i = 0; i < sequencia.sequenciaInput.sequencia.length; i++) {
          sequenciaList.push(adiciona_hifen(sequencia.sequenciaInput.sequencia[i]));
        }
      
        expect(sequenciaList).toEqual(sequencia.sequenciaOutput.sequencia);
      });