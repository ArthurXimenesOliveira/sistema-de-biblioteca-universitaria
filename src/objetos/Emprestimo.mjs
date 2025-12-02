export default class Emprestimo {
    #dataEmprestimo;
    #dataDevolucao;
    #idAluno;
    #idLivro;

    setDataEmprestimo(dataEmprestimo) {
        this.#dataEmprestimo = dataEmprestimo;
    }

    getDataEmprestimo() {
        return this.#dataEmprestimo;
    }

    setDataDevolucao(dataDevolucao) {
        this.#dataDevolucao = dataDevolucao;
    }

    getDataDevolucao() {
        return this.#dataDevolucao;
    }

    setIdAluno(idAluno) {
        this.#idAluno = idAluno;
    }

    getIdAluno() {
        return this.#idAluno;
    }

    setIdLivro(idLivro) {
        this.#idLivro = idLivro;
    }

    getIdLivro() {
        return this.#idLivro;
    }
}