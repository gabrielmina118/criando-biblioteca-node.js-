const pegaArquivo = require("../index")

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe("Teste da função pegaArquivo::", () => {

    it("deve ser uma função", () => {
        expect(typeof pegaArquivo).toBe("function");
    })

    it("retorna um array de resultados", async () => {
        const resultado = await pegaArquivo("/Users/gabrielminadasilva/Desktop/aluraNode/2299-lib-nodejs-markdown-aula-4/test/arquivos/texto1.md")
        expect(resultado).toEqual(arrayResult)
    })

    it('deve retornar mensagem : "não há links"', async () => {
        const resultado = await pegaArquivo("/Users/gabrielminadasilva/Desktop/aluraNode/2299-lib-nodejs-markdown-aula-4/test/arquivos/texto2.md")
        expect(resultado).toBe("não há links")
    })
    it('deve retornar mensagem : "não há arquivo no caminho"', async () => {
        try {
            const resultado = await pegaArquivo("/Users/gabrielminadasilva/Desktop/aluraNode/2299-lib-nodejs-markdown-aula-4/test/arquivos/")
        } catch (error) {
            expect(error.message).toEqual("não há arquivo no caminho")
        }

    })

})