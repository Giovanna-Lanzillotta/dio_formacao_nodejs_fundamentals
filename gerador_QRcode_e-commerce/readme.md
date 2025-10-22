# Projeto Gerador de QR Codes para E-Commerces

## Gerador de QR Codes

-  iniciar projeto no terminal com:

~~~bash
npm init -y
~~~

- Criar um diretório  ``src`` com o arquivo ``index.js``

- Colocar como padrão **esm** no arquivo ``packge.json``

~~~json
  "type": "module",
~~~
- baixar o pacote ``prompt`` no terminal com:

~~~bash
npm i prompt
~~~~

🔗 link: https://www.npmjs.com/package/prompt


- baixar o ``chalk`` para estilizar o terminal
~~~bash
npm i chalk
~~~~

🔗 link: https://www.npmjs.com/package/chalk

- baixar o ``QRCode Terminal Edition``

~~~bash
npm i qrcode-terminal
~~~~

🔗 link: https://www.npmjs.com/package/qrcode-terminal

## Gerador de Senhas

- criar o arquivo .env

-  adicionar no aqruivo package.json

~~~json
"start": "node --env-file=.env src/index.js"
~~~
