# 🤖 react-sample
[![Build Status](https://circleci.com/gh/vitorspadacio/react-sample.svg?style=shield)](https://circleci.com/gh/vitorspadacio/react-sample) 
[![Coverage Status](https://coveralls.io/repos/github/vitorspadacio/react-sample/badge.svg?branch=main)](https://coveralls.io/github/vitorspadacio/react-sample?branch=main)

Neste repositório você encontrará um exemplo de aplicação frontend usando a biblioteca React.

Esse exemplo é opinativo e segue uma estrutura que mescla diferentes recomendações de JavaScript, TypeScript, React, testes, além de unir a experiência de utilização e entrega de projetos para diferentes clientes em produção.

[Exemplo app publicado](https://react-sample-6f785.web.app/)

---

<br/>

## 📚 Tecnologias

As tecnologias e estruturas utilizadas no exemplo são:
- Node.js v22.14.0 LTS
- Renderização com React 19;
- Estrutura de pastas pronta para aplicação de médio porte;
- Estilização com SASS e/ou styled-components;
- Padronização de código com .editorconfig, ESLint e Prettier;
- Requisição HTTP com API fetch nativa;
- Gerenciamento de estado único (Zustand);
- Testes automátizados (Jest);
- Testes de integração com DOM em memória (Testing-Library).

Além disso encontrará diferentes exemplos para os seguintes cenários:
- Componentes sem estado;
- Componentes interagindo com estado único;
- Componentes compartilhados;
- Testes de integração;
- Testes de unidade em módulos;
- Variáveis de ambientes.

No quesito publicação temos:
- Setup utilizando Firebase Hosting;
- Build CI utilizando CircleCI;
- Badges com informações de build, coverage e dependencies.

---

## 🚀 Iniciando

<br/>

Por padrão recomendo o uso do ``yarn``, por isso para iniciar o projeto:
```
yarn
```

Para rodar a aplicação:
```
yarn start
```
> Ao rodar start, automaticamente roda o ESLint com correção automática de código.

<br/>

Para rodar os testes para ci e/ou rodar todos os testes da aplicação:
```
yarn test
```
> Ao rodar test ou test:watch, automaticamente roda o ESLint sem correção automática e apresentará erro caso alguma regra não seja seguida.

<br/>

Para rodar testes com `watcher` durante desenvolvimento, usar:
```
yarn test:watch
```

---

## 🦝 Sugestões

<br/>

Tudo neste repositório é opinativo e está em constante evolução, por isso todo comentário e sugestão é muito bem vinda para evoluir e facilitar início de projetos em React.

Este repositório é livre e todos podem usá-lo.
