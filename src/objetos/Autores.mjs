import Pessoa from "./Pessoa.mjs";
export default class Autores extends Pessoa {
  // Atributos
  #autorId;
  #biografia;
  #nacionalidade;

  // Métodos
  setAutorId(id) {
    this.#autorId = id;
    return true;
  }
  getAutorId() {
    return this.#autorId;
  }
  setBiografia(biografia) {
    this.#biografia = biografia;
    return true;
  }
  getBiografia() {
    return this.#biografia;
  }
  setNacionalidade(nacionalidade) {
    this.#nacionalidade = nacionalidade;
  }
  getNacionalidade() {
    return this.#nacionalidade;
  }
}
