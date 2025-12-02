import { message } from "antd";
import Emprestimo from "../objetos/Emprestimo.mjs";

export default class EmprestimoDAO {
  constructor() {
    this.chave = "emprestimos";
  }
  async carregarEmprestimos() {
    const dados = localStorage.getItem(this.chave);
    if (dados) {
      const lista = JSON.parse(dados);
      return lista; //enviando um array de objetos simples
    }
    return [];
  }
  gerarId() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }
  arrumarDados(valores) {
    if (!valores) return false;
    return {
      id: valores.id || this.gerarId(),
      dataEmprestimo: new Date().toISOString().split("T")[0],
      idAluno: valores.alunosSelecionados,
      idLivro: valores.livrosSelecionados,
      pendente: true,
    };
  }

  async salvarEmprestimo(emprestimo) {
    console.log("Salvando empréstimo:", emprestimo);
    const lista = await this.carregarEmprestimos();
    const objeto = this.arrumarDados(emprestimo);
    if (lista.find((e) => e.id === objeto.id)) {
      message.error("Erro: Empréstimo já existe!");
      return;
    }
    lista.push(objeto);
    localStorage.setItem(this.chave, JSON.stringify(lista));
    message.success("Empréstimo salvo com sucesso!");
    return true;
  }
  async devolverEmprestimo(id) {
    if (!id) {
      message.error("Erro: ID inválido para devolução!");
      return false;
    }
    const lista = await this.carregarEmprestimos();
    const emprestimoIndex = lista.findIndex((e) => e.id === id);
    if (emprestimoIndex === -1) {
      message.error("Erro: Empréstimo não encontrado!");
      return false;
    }
    lista[emprestimoIndex].pendente = false;
    localStorage.setItem(this.chave, JSON.stringify(lista));
    message.success("Empréstimo devolvido com sucesso!");
    return true;
  }
}
