# 🎙🎧Gerenciador de Podcasts - API NodeJs com Typescript e HTTP Module

## 🟢 Documentação do nodeJs: https://nodejs.org/docs/latest/api/

## 🐱‍💻 Tecnologias Utilizadas:

<div>

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="5%"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg" width="5%"/>               
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="5%"/>         
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" width="5%"/>
</div>
          
###

- Após fazer sua documentação, iniciar no terminal o seguinte comando:
~~~shell
npm init -y
~~~

- Em seguida:
~~~shell
npm i typescript tsx tsup -D
~~~

- Criar um arquivo ``.gitignore`` e colocar ``/node_modules`` para não envia-la ao github


- Para criar o ``tsconfig.json`` digite no terminal:
~~~shell
 npx tsc --init
 ~~~

- Criar as scripts no ``package.json``
~~~json
  "scripts": {
    "start:dev": "tsx --env-file=.env src/server.ts",
    "start:watch": "tsx watch  --env-file=.env src/server.ts",
    "dist": "tsup src",
    "start:dist": "npm run dist && --env-file=.env node/server.js"
  },
~~~

- Dentro de ``src`` crie ``controllers`` , ``services`` , ``repositores``

- Crie o tsconfig 

~~~json
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
  }
}

~~~
