const checkNode_action = { 
    check_node(rnas, RasaActionEvent) {
        rnas.define("action_check_node", (action, res) => {
            console.log('Server Node Online')
        
          res
            .addEvent(RasaActionEvent.bot("Servidor continua online"))
            .send();
        });
      }
    }

module.exports = {
    checkNode_action
}