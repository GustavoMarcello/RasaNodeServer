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