const xapi = require('xapi');

function DisplayPopup(event) {
if (event.WidgetId === 'widget_68' && event.Type === 'clicked') {
      xapi.command('UserInterface Message Alert Display', {
        Title: 'Please wait at least 30 seconds ...',
        Text: 'AV Systems are initializing...',
        Duration: 30
      });
}}
xapi.event.on('UserInterface Extensions Widget Action', DisplayPopup);

function DisplayPopup2(event) {
if (event.WidgetId === 'widget_67' && event.Type === 'clicked') {
      xapi.command('UserInterface Message Alert Display', {
        Title: 'Please wait...',
        Text: 'AV Systems are shutting down.',
        Duration: 15
      });
}
}
xapi.event.on('UserInterface Extensions Widget Action', DisplayPopup2);