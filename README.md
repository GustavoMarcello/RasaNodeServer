# Chatbot Rasa com servidor de Actions em NodeJS

<div align="center"><img src = "https://liniribeiro.github.io/assets/posts/rasa/rasa-logo-canva.png" width="200" height="200"><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpyOtL1UjrVMkwdAhonIFkUFUK0KIfCn6-eDQM_U98_l9_qUXONdcfh55Mcq5nM_NYMQ&usqp=CAU" width="200" height="200"></div>

Este repositório visa uma alternativa de utilizar a linguagem `NodeJS` para programar as actions e subir um servidor para seu chatbot em Rasa.

## ✅ Benefícios
- Amplia a possibilidade do desenvolvedor escolher em qual linguagem prefere utilizar `NodeJS` ou `Python`.

## ⚠ Pontos de atenção
- Não será possível utilizar ambos servidores de actions em paralelo, somente ou em `NodeJS` ou `Python`.

## ⬇ Pré-requisitos
- Rasa
- NodeJS
- Spacy

## 💻 Construindo o Chatbot
Comandos iniciais
```
rasa init
```
```
npm start
```
```
npm install rasa-node-action-server
```

Após o download e instalação dos pré-requisitos, crie um arquivo `index.js` na raíz de seu projeto com o seguinte código:
```node
// index.js
const { text } = require("body-parser");
const { RasaNodeActionServer, RasaActionEvent } = require("rasa-node-action-server");
const rnas = new RasaNodeActionServer();

// importação de cada action criada na pasta node_actions
const welcome = require('./node_actions/welcome');
const check = require('./node_actions/check');

// instanciando as actions
welcome.welcomeNode_action.welcome_node(rnas, RasaActionEvent);
check.checkNode_action.check_node(rnas, RasaActionEvent);

// rodando o servidor
rnas.start();
```
Esse arquivo será seu index principal, e servirá para importar todas as actions que forem criadas na pasta `node_actions` e rodar o servidor em node.

Crie uma pasta `node_actions` na raiz do seu chatbot Rasa, para armazenar cada arquivo de actions desejado.
```node
//welcome.js
const welcomeNode_action = { 
    welcome_node(rnas, RasaActionEvent) {
        // o nome da action foi definida como action_welcome_node
        rnas.define("action_welcome_node", (action, res) => {
            console.log('Server Node Online')
        
          res
            .addEvent(RasaActionEvent.bot("Servidor Node Online!\n\n Bem vindo!"))
            .send();
        });
      }
    }

module.exports = {
  welcomeNode_action
}
```
Deve-se chamar as actions em node da mesma forma de uma action python, definindo em seu `domain.yml`, `stories.yml` e `rules.yml`.

Seguindo os passos acima, rode o comando a seguir para iniciar seu servidor em node.
```
node index.js
```
O `RasaNodeActionServer` por padrão vai iniciar um servidor express em `localhost:5055`.

## 📚 Referências
- [rasa-node-action-server](https://github.com/Lykos94/rasa-node-action-server) repositório
