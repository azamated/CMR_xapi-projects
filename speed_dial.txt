const xapi = require('xapi');

//IT HelkpDesk
function quickDial1(event) {
if (event.WidgetId === 'IT Support' && event.Type === 'clicked') {
xapi.command('Dial', { Number: 'support@company.com' });
}
}
xapi.event.on('UserInterface Extensions Widget Action', quickDial1);