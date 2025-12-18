import Pessoa from "./Pessoa.mjs";

export default class Aluno extends Pessoa {
  #alunoId;
  #matricula;
  #curso;
  #email;
  #telefone;

  setAlunoId(id) {
    this.#alunoId = id;
    return true;
  }
  getAlunoId() {
    return this.#alunoId;
  }

  setMatricula(matricula) {
    this.#matricula = matricula;
    return true;
  }
  getMatricula() {
    return this.#matricula;
  }
  setCurso(curso) {
    this.#curso = curso;
    return true;
  }
  getCurso() {
    return this.#curso;
  }
  setEmail(email) {
    this.#email = email;
    return true;
  }
  getEmail() {
    return this.#email;
  }
  setTelefone(telefone) {
    this.#telefone = telefone;
    return true;
  }
  getTelefone() {
    return this.#telefone;
  }
}
