<img width="64" height="64" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-debug-computer-programming-flaticons-flat-flat-icons.png" alt="external-debug-computer-programming-flaticons-flat-flat-icons"/> 

#  DEBUG 

- Iniciar com o comando no terminal
~~~shell
npm init -y
~~~

- Digitar o seguinte comando terminal.

~~~shell
npm i typescript tsx tsup -D
~~~

- Criar o arquivo ``.gitignore`` e colocar a **node_modules/**

- Criar o diretório ``src``

- Digite no terminal para criar um arquivo de configurações TypeScript chamado ``tsconfig.json``

~~~shell
npx tsc --init
~~~

-Configurar o arquivo ``tscongig.json``

~~~json
{
 
  "compilerOptions": {

    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true

  }}
~~~

- criar o arquivo ``index.ts`` dentro do **diretório src**

- criar uma **script** no ``package.json`` para chamar o arquivo ``index.ts`` 

~~~json
 "scripts": {
    "start:dev": "tsx src/index.ts"
  },
~~~

- Digitar no terminal

~~~shell
 npm run start:dev
 ~~~

 - Criar dentro do **diretório** ``src`` outro **diretório** chamado ``services``

 - Criar o arquivo`` email.ts`` dentro do **diretório** ``services``.

 ## 🔴 Como preparar o modo de debug no vscode

- Crie um **breakpoint** clicando na bolinha vermelha do lado do número da linha.
- Adicione na hora que ele concatena e na hora que ele dá um return no arquivo ``email.ts``

[adicionar imagem breakpoint]

- Coloque um breakpoint no ``index.ts`` tambem.

[adicionar imagem breakpoint_index]

### Modo 1 

- Ir no ``package.json`` e clicar no **Debug Script**

[adicionar imagem debugscript]

### Controle Remoto do Debug

- No debug aparece um controle remoto.

[inserir imagem de controle remoto debbug]

- botão **Continue(F5)**: Vai Para o próximo breakpoint, ele continua executando o código.

[inserir foto continue debuug]

- botão **Disconnect(Shift+F5)**: Disconecta/para/sai do modo debbug.

[inserir foto disconnect botao]

- botão **Restart(Ctrl+Shift+F5)**: Reinicia o processo.

[inserir foto restart botao]

- botão **Step Out(Shift+F11)**: Pula uma etapa.

[inserir foto step out botao]

- botão **Step Into(Shift+F11)**: Executa linha a linha.

[inserir foto step into botao]

- botão **Step Over(F10)**: Só para na próxinha linha que estive um breakpoint.

[inserir foto step over botao]

### Watch

- É possível vigiar o valor da variável clicando em **watch** e adicionando ela.
- Pode colocar variável, função ... para serem vigiadas.

[adicionar foto watch]

### Call stack

- Call stack - É a pilha de chamadas.

[adicionar foto call stack]


### Adicionando mais breakpoints

[inserir imagem mais_breakpoints]


### Criar um perfil de Debug
#### Debug Mode e Lauch Json

- **Perfil de debug**: é uma constumização de como seu modo debug deve rodar.

- Clicar em Run e Debug

- Clicar em Add Configuration

- Escolher o modelo de configuração: **Node.js: Attach to Process**