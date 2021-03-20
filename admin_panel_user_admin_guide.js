const xapi = require('xapi');

function DisplayPopup(event) {
if (event.WidgetId === 'widget_69' && event.Type === 'clicked') {
      xapi.command('UserInterface Message Alert Display', {
        Title: 'Admin Guide',
        Text: 'Nothing to show yet',
        Duration: 60
      });
}
}
xapi.event.on('UserInterface Extensions Widget Action', DisplayPopup);