# 📚 Sistema de Biblioteca Universitária

**Frontend em React (Vite) + TailwindCSS + Ant Design + JavaScript (ESM)**

Projeto de **aplicação web completa** para gerenciamento de uma Biblioteca Universitária, contemplando CRUDs de **Livros**, **Autores** e **Alunos**, além de **relatórios de empréstimos por aluno**, com persistência via **LocalStorage**.

---

## 🌐 Deploy da Aplicação

* **Frontend (Produção):**

  * 🔗 Vercel: [https://sistema-de-biblioteca-universitaria-62gout574-kauancas-projects.vercel.app/#/livros](https://sistema-de-biblioteca-universitaria-62gout574-kauancas-projects.vercel.app/#/livros)
  * 🔗 GitHub Pages: [https://kauanca.github.io/sistema-de-biblioteca-universitaria/#/livros](https://kauanca.github.io/sistema-de-biblioteca-universitaria/#/livros)

---

## 📦 Repositórios

* **Frontend (ReactJS):**
  🔗 [https://github.com/KauaNca/sistema-de-biblioteca-universitaria](https://github.com/KauaNca/sistema-de-biblioteca-universitaria)

---

## 🧭 Visão Geral

* **Domínio:** Gerenciamento de Biblioteca
* **Entidades Principais:** Pessoa, Aluno, Autor, Livro, Empréstimo
* **Objetivo:** Desenvolver um Frontend completo consumindo uma API (simulada), com CRUDs funcionais, boas práticas de organização e arquitetura.
* **Persistência:** LocalStorage (API simulada), com acesso via DAOs.

---

## 🚀 Tecnologias Utilizadas

### Frontend

* React JS (Vite)
* JavaScript (ES Modules)
* TailwindCSS
* Ant Design (AntD)
* React Router
* LocalStorage
* Recharts

---

## 🎯 Desafio Atendido (CRUDs + Relacionamentos)

O projeto atende integralmente ao desafio proposto, incluindo:

* ✅ CRUD de Alunos
* ✅ CRUD de Autores
* ✅ CRUD de Livros
* ✅ Relacionamentos entre Pessoa, Alunos, Autores e Empréstimos
* ✅ Persistência em LocalStorage
* ✅ Padrão DAO encapsulando todas as operações de dados

---

## 📋 Requisitos Funcionais (RF)

### Livros

* **RF01** — Cadastrar livros
* **RF02** — Listar livros
* **RF03** — Visualizar detalhes do livro
* **RF04** — Editar livros
* **RF05** — Remover livros
* **RF06** — Associar livros a autores

### Alunos

* **RF07** — Cadastrar alunos
* **RF08** — Listar alunos
* **RF09** — Visualizar detalhes do aluno
* **RF10** — Editar alunos
* **RF11** — Remover alunos

### Autores

* **RF12** — Cadastrar autores
* **RF13** — Listar autores
* **RF14** — Visualizar detalhes do autor
* **RF15** — Editar autores
* **RF16** — Remover autores

### Empréstimos

* **RF17** — Registrar empréstimo de livros
* **RF18** — Listar empréstimos
* **RF19** — Devolver livro
* **RF20** — Gerar relatório de livros emprestados por aluno

---

## ⚙️ Requisitos Não Funcionais (RNF)

* **RNF01** — Aplicação desenvolvida em ReactJS
* **RNF02** — Interface construída com Ant Design e Recharts
* **RNF03** — Comunicação com LocalStorage
* **RNF04** — Uso do padrão DAO para acesso aos dados
* **RNF05** — Interface responsiva
* **RNF06** — Validação de formulários
* **RNF07** — Código organizado por componentes e responsabilidades

---
# 🖼️ Telas da Aplicação

As telas abaixo ilustram as principais funcionalidades do sistema.

### Tela 1 — Livros
![Tela Livros](./images/livros.png)

### Tela 2 — Alunos
![Tela Alunos](./images/alunos.png)

### Tela 3 — Autores
![Tela Autores](./images/autores.png)

### Tela 4 — Empréstimo
![Tela Empréstimo](./images/emprestimo.png)

### Tela 5 — Relatórios
![Tela Relatório](./images/relatorio.png)

---

## 📁 Estrutura de Pastas

```txt
projeto/
├── dist/
├── node_modules/
├── public/
│   └── biblioteca.avif
├── src/
│   ├── assets/
│   ├── components/
│   ├── daos/
│   ├── objetos/
│   ├── pages/
│   ├── routes/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## ▶️ Execução Local

```bash
npm install
npm run dev
```

---

## 🎯 Objetivos de Aprendizado

Este projeto permite praticar:

* Organização modular com **React**
* Componentização com **TailwindCSS** e **Ant Design**
* Implementação de **CRUD completo** no Frontend
* Persistência simples utilizando **LocalStorage**
* Manipulação de **relacionamentos entre entidades**
* Geração de **relatórios combinando múltiplas fontes de dados**

---

## 👥 Autoria

* **Autores:** Kauã Nunes, Arthur e Guilherme
* **Projeto:** Bolsa Futuro Digital (BFD)
* **Área:** Desenvolvimento Frontend
* **Instituição:** Instituto Federal de Brasília (IFB)
