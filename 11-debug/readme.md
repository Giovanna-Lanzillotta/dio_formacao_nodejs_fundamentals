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

<img width="658" height="218" alt="breakpoint" src="https://github.com/user-attachments/assets/6699e68a-c46e-4548-8aa3-f0dda1135f6c" />

- Coloque um breakpoint no ``index.ts`` tambem.

<img width="424" height="197" alt="breakpoint_index" src="https://github.com/user-attachments/assets/92a6f835-3d32-40f5-8610-58884fba7824" />

### Modo 1 

- Ir no ``package.json`` e clicar no **Debug Script**


<img width="339" height="132" alt="debugScript" src="https://github.com/user-attachments/assets/eb6de46d-af1b-4503-ae23-10ff99faedd7" />


### Controle Remoto do Debug

- No debug aparece um controle remoto.

<img width="198" height="37" alt="controle remoto debbug" src="https://github.com/user-attachments/assets/6e487290-639b-4abe-8eda-6c422759d12d" />


- botão **Continue(F5)**: Vai Para o próximo breakpoint, ele continua executando o código.

<img width="655" height="194" alt="continue debbug" src="https://github.com/user-attachments/assets/b3e5d06a-c38e-41a1-a2f8-8609e66937ea" />


- botão **Disconnect(Shift+F5)**: Desconecta/para/sai do modo debbug.

<img width="236" height="78" alt="disconnect botao" src="https://github.com/user-attachments/assets/cdfdbe0c-b541-45ae-8378-7fd69ca3e699" />


- botão **Restart(Ctrl+Shift+F5)**: Reinicia o processo.

<img width="217" height="62" alt="restart botao" src="https://github.com/user-attachments/assets/f53505cf-aab5-4a5a-b9ae-1f971cc83394" />


- botão **Step Out(Shift+F11)**: Pula uma etapa.

<img width="207" height="63" alt="step out botao" src="https://github.com/user-attachments/assets/69ee0000-d1ee-4a0c-9170-9bb03c683719" />


- botão **Step Into(Shift+F11)**: Executa linha a linha.

<img width="202" height="62" alt="step into botao" src="https://github.com/user-attachments/assets/01bd51ab-db07-4e5b-97a0-b88f9d5df2c3" />


- botão **Step Over(F10)**: Só para na próxinha linha que estive um breakpoint.

<img width="207" height="62" alt="Captura de Tela (594)" src="https://github.com/user-attachments/assets/26255cb0-fcd1-42cc-b047-7825bb43158c" />


### Watch

- É possível vigiar o valor da variável clicando em **watch** e adicionando ela.
- Pode colocar variável, função ... para serem vigiadas.

<img width="451" height="84" alt="watch" src="https://github.com/user-attachments/assets/86222660-41ce-4929-a2c4-761265d506f6" />


### Call stack

- Call stack - É a pilha de chamadas.

<img width="288" height="355" alt="callstack" src="https://github.com/user-attachments/assets/606943bb-da5d-4492-92d4-cad21b0bee00" />


### Adicionando mais breakpoints

<img width="648" height="328" alt="adicionando breakpoints" src="https://github.com/user-attachments/assets/902b677d-6f26-41eb-b492-693e42a73bf7" />


### Criar um perfil de Debug
#### Debug Mode e Lauch Json

- **Perfil de debug**: é uma constumização de como seu modo debug deve rodar.

- Clicar em create aluch.json file
- 
<img width="268" height="312" alt="create-lauch" src="https://github.com/user-attachments/assets/51558960-e1bc-4fb6-8444-2d2b193a39cc" />

- Clicar em Add Configuration

- Escolher o modelo de configuração: **Node.js: Attach to Process**
  
<img width="522" height="327" alt="opcao" src="https://github.com/user-attachments/assets/2eb2c89d-415e-4e23-bd83-c32f76105878" />

  
