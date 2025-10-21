- criar um arquivo ``.env`` para colocar os usuários e senha
- criar um arquivo ``.gitignore`` não envia-los para o github

### Como fazer a aplicação node ler o arquivo ``.env`` e fazer conversarem entre si

- aponta no projeto node um arquivo .file e dizer que eles compratilham do mesmo processo, mesmo separados se eles compartilham do mesmo processo um consegue exergar o outro.Obs: vers~so node 20 para cima.

~~~json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:dev": "node --env-file=.env --watch src/index.js"
  },
  ~~~

