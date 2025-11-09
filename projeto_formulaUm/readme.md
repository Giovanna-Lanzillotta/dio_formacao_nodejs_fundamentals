# Projeto fórmula 1 🏎

## Criando uma Minimal API da Fórmula 1 com Node.js e Fastify 

## 🐱‍💻 Tecnologias utilzadas:
<div>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="5%"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg" width="5%"/>               
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="5%"/>  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-plain.svg" width="7%" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" width="5%"/>               
</div>

## 

- 🔮 pegar o boilerplate da sua escolha

- boilerplate escolhido: https://github.com/felipeAguiarCode/node-blue-boilerplate

- 📁 Digite no terminal, para baixar o ``node_modules``
~~~shell
npm install
~~~

- Site do **npm**: https://www.npmjs.com/

- 🔎 Entre no site da **npm** e busque por ``fastify``

- documentação do **fastify**: https://fastify.dev/

- Para instalar, digite no terminal
~~~shell
npm i fastify
~~~

## Criando a APi com Fastify

- 📂 No arquivo de ``server.ts`` dentro de ``src``, vai ser criado uma API com ``fastify``

- Importe a fastify no arquivo ``server.ts```
~~~typescript
import fastify from "fastify";
~~~

- 📡 Crie um servidor


O **logger** tem a função de registrar informações, avisos e erros sobre o que está acontecendo no seu servidor.

- 👩‍💻  Escolha o método ``HTTP`` --> **GET**

**GET** é um dos Métodos de Requisição ``HTTP`` mais fundamentais e mais utilizados na comunicação entre um cliente (como um navegador) e um servidor web.

O método **GET** serve para recuperar dados ou recursos específicos de um servidor.

- Em ``postman`` colo que o modo ``GET`` e digite http://localhost:3333/teams
~~~json
[
    {
        "id": 1,
        "name": "ferrari"
    }
]
~~~

#### Criando outro método GET