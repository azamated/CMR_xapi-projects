const xapi = require('xapi');

//System Control Tools button
function SystemControlTools(event) {
if (event.WidgetId === 'SystemControlTools' && event.Type === 'clicked') {
xapi.command('UserInterface Extensions Panel Clicked', {PanelId: 'admin_Entry'});
}
}
xapi.event.on('UserInterface Extensions Widget Action', SystemControlTools);

//System Power Off button
function SystemPowerOff(event) {
if (event.WidgetId === 'SystemPowerOff' && event.Type === 'clicked') {
xapi.command('UserInterface Extensions Widget Action', {
        WidgetId: 'widget_67',
        Type: 'pressed'});
        
xapi.command('UserInterface Message Alert Display', {
        Title: 'Please wait...',
        Text: 'AV Systems are shutting down.',
        Duration: 15
      });
}}
xapi.event.on('UserInterface Extensions Widget Action', SystemPowerOff);

//Room Control button
function RoomControl(event) {
if (event.WidgetId === 'RoomControl' && event.Type === 'clicked') {
xapi.command('UserInterface Extensions Panel Open', {
        PanelId: 'panel_1'
      });
xapi.command("UserInterface Message Alert Display", {
             Title: "UNDER DEVELOPMENT",
             Text: "Room control is on  the roadmap...",
             Duration: 3
         }).catch((error) => { console.error(error); });
}
}
xapi.event.on('UserInterface Extensions Widget Action', RoomControl);

//Speed Dialing button
function SpeedDialing(event) {
if (event.WidgetId === 'SpeedDialing' && event.Type === 'clicked') {
xapi.command('UserInterface Extensions Panel Open', {
        PanelId: 'speeddial'
      });
}
}
xapi.event.on('UserInterface Extensions Widget Action', SpeedDialing);