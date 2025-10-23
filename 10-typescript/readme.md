# <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="5%"/> TypeScript

link da documentação: https://www.typescriptlang.org/pt/

- iniciar com o comando no terminal.
~~~bash
npm init -y 
~~~

- Colocar no ``package.json`` o tipo module.
~~~json
 "type": "module",
~~~

- Criar no ``package.json`` uma script
~~~json
 "scripts": {
    "start:dev": "node src/index.js"
  },
  ~~~

## Como instalar typescript

- baixar o pacote 

link: https://www.npmjs.com/package/typescript

- Utlizar o segunte comando:
~~~bash
npm install -D typescript
~~~

- Para o nodejs rodar o .ts
~~~bash
npx tsc src/index.ts
~~~

-criar uma script
~~~json
"dist" : "npx tsc src/index.ts",
~~~

- alterar a script start:dev para
~~~json
  "start:dev": "npm run dist && node src/index.js"
  ~~~

- Ao digitar no terminal, criar um arquivo ``tsconfig.json``, que serve como um guia para o projeto TypeScript.E como TypeScript deve se comportar no seu projeto.
~~~bash
npx tsc --init
~~~

- Instalar o pacote ``tsx``


link: https://www.npmjs.com/package/tsx

 inserir o seguinte comando no terminal:
~~~bash
npm i tsx -D
~~~

- Modificações no script no ``package.json``
~~~json
  "scripts": {
    "dist": "npx tsc",
    "start:dev": "tsx src/index.ts",
    "start:watch": "tsx watch src/index.ts",
    "start:dist": "npm run dist && node src/index.js"
  },
  ~~~


  - Utilizar o ``tsup`` digital no terminal.

~~~bash
npm i tsup -D
~~~

link: https://www.npmjs.com/package/tsup/v/8.5.0

- Colocar no package.json onde eu quero que ele traduza.

~~~json
"scripts": {
"dist": "tsup src",
~~~

📈 Observar o site **npm trends** para ver as tendências no mercado.


link do site: https://npmtrends.com/tsc-vs-tsdx-vs-tsup
