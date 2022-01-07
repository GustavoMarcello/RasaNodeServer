const welcomeNode_action = { 
    welcome_node(rnas, RasaActionEvent) {
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
