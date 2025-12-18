export default class Emprestimo {
    #dataEmprestimo;
    #dataDevolucao;
    #idAluno;
    #idLivro;

    setDataEmprestimo(dataEmprestimo) {
        this.#dataEmprestimo = dataEmprestimo;
        return true;
    }

    getDataEmprestimo() {
        return this.#dataEmprestimo;
    }

    setDataDevolucao(dataDevolucao) {
        this.#dataDevolucao = dataDevolucao;
        return true;
    }

    getDataDevolucao() {
        return this.#dataDevolucao;
    }

    setIdAluno(idAluno) {
        this.#idAluno = idAluno;
        return true;
    }

    getIdAluno() {
        return this.#idAluno;
    }

    setIdLivro(idLivro) {
        this.#idLivro = idLivro;
        return true;
    }

    getIdLivro() {
        return this.#idLivro;
    }
}