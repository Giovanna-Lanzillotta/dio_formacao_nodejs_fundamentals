# Recriando a API da Champions League com Node.js e Express 🏆

## 🐱‍💻 Tecnologias Utilizadas

<div>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="5%"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg" width="5%"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="5%" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width="5%"/>
</div>
                           

## ⚽ Objetivo

### Iniciando o projeto

- iniciar digitando no terminal 
~~~shell
npm init -y
~~~

- Instalar os pacotes
~~~shell
npm i typescript tsx tsup -D
~~~

- criar o tsconfig.ts digitando no terminal
~~~shell
 npx tsc --init
~~~

### tsconfig.ts

~~~typescript
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
    
  }
}
~~~


### Express

~~~shell
npm i express
~~~

- importe o express em ``server.ts`` e instale a tipagem ``@types/express``

