# Scripts

### Rodar uma scipt
- Rodar no terminal o seguinte comando, que serve para executar os teste de um rpojeto JavaScript procurando a entrada "test" na seção "scripts" do arquivo ``package.json``.
```bash
npm run test
```

- Sem utilizar o terminal, dentro do ``package.json`` em cima de script,clicar em **Run Script**
  

<img width="438" height="100" alt="run_script" src="https://github.com/user-attachments/assets/c8abfce4-c8aa-4e9a-8f5b-5518abaa00c0" />


- Habilitar NPM Scripts, e clicar no **NPM SCRIPTS** e em seguida clicar em run.


<img width="446" height="223" alt="npm_script" src="https://github.com/user-attachments/assets/5118ab33-9b6c-4ccb-a819-58185a3592ca" />

<img width="313" height="215" alt="npm_scripts_embaixo" src="https://github.com/user-attachments/assets/d13603df-f8fb-48e5-9231-6a324a7e0834" />

### Criação de Script

- Insira seu novo comando no **package.json**

<img width="920" height="201" alt="create_script" src="https://github.com/user-attachments/assets/0d2fa378-da75-4e30-be1f-db1f609eaf67" />

- Em seguida clicar, de um **Run Script** no comando **iniciar** ele vai substituir o ``node src/index.js``

<img width="513" height="266" alt="Captura de Tela (577)" src="https://github.com/user-attachments/assets/99e4aeb1-cd01-44eb-ba2c-30731a6b310d" />

- Para colocar mais comando em uma Srcipt utilize ``&&``


<img width="967" height="194" alt="create_script2" src="https://github.com/user-attachments/assets/efe1b596-03c8-4407-84ed-c5b5a29b013c" />

- Podemos ver que a pasta **dist** foi criada: 
 <img width="303" height="171" alt="pasta_dist" src="https://github.com/user-attachments/assets/eeb3bb7e-7678-4edc-8125-86a27c7b8c94" />

### Scripts Padrões (não oficial)

- **prebuild:** Aqui fica os comandos que pessoa precisa rodar antes de rpdar o projeto pela primeira vez.

- **start:dev:** Roda o seu projeto node.

- **star:watch:** Rodar o mesmo comando toda vez que o projeto é alterando o node é reiniciado.


<img width="673" height="211" alt="scripts_naming_coomuns" src="https://github.com/user-attachments/assets/9c44bbd1-0a90-4f4a-b781-703dc631538f" />

OBS:Os nomes podem variar de empresa para empresa!
