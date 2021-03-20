const xapi = require('xapi');

const everyThirtySeconds = 30 * 1000; // In milliseconds
const timerId = setInterval(checkSysStatus, everyThirtySeconds);

//If system is inactive send a prompt to users
function checkCount(state) {
  if (state === 'active') {
		console.log("System is OFF");
          xapi.command("UserInterface Message Prompt Display", {
            Title: "System is currently OFF", 
            Text: 'Turn it ON?',
            FeedbackId: 'userConfirmation', 
            'Option.1':'Yes', Duration: 30});
  }
  else {
    console.log("System is ON");
}}

//check status of the system
function checkSysStatus() {
xapi.status
    .get('UserInterface Extensions Widget 14')
    .then((stat) => {
        console.log('Checking system status ...');
        checkCount(stat.Value);

    })
}

//Whan a user confirms “yes” – start the system.
xapi.Event.UserInterface.Message.Prompt.Response.on((event) => {
if (event.FeedbackId === 'userConfirmation')
switch(event.OptionId){
        case '1':
            xapi.command('UserInterface Extensions Widget Action', {WidgetId: 'widget_68', Type: 'pressed'});
            //xapi.command('UserInterface Extensions Panel Clicked', {PanelId: 'panel_init'});
            xapi.command('UserInterface Message Alert Display', {
            Title: 'Please wait',
            Text: 'System initialization',
            Duration: 30
      });
	}
});
