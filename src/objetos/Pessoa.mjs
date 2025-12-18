export default class Pessoa {
  /** Atributos */
  #nome;
  #dataNascimento;


  /** Métodos */

  setNome(nome) {
    this.#nome = nome;
    return true;
  }
  getNome() {
    return this.#nome;
  }
  setDataNascimento(dataNascimento) {
    this.#dataNascimento = dataNascimento;
    return true;
  }
  getDataNascimento() {
    return this.#dataNascimento;
  }

}
