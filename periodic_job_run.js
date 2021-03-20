const xapi = require('xapi');

//Re-Init 1/2
function reInit() {
xapi.command('UserInterface Extensions Panel Clicked', {PanelId: 'panel_init'});
      xapi.command('UserInterface Message Alert Display', {
        Title: 'Please wait',
        Text: 'System initialization 1/2',
        Duration: 30
      });
}
const after5 = 5 * 1000; // In milliseconds
setTimeout(reInit, after5);

//Repeat re-init in case feedback is not fully sync,  Re-Init 2/2
function reInit2() {
xapi.command('UserInterface Extensions Panel Clicked', {PanelId: 'panel_init'});
      xapi.command('UserInterface Message Alert Display', {
        Title: 'Please wait',
        Text: 'System initialization 2/2',
        Duration: 25
      });
}
const after35 = 35 * 1000; // In milliseconds
setTimeout(reInit2, after35);

//Periodc Re-Init (once a day at 6AM)
function schedule(time, action) {
let [alarmH, alarmM] = time.split(':');
let now = new Date();
now = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
let difference = parseInt(alarmH) * 3600 + parseInt(alarmM) * 60 - now;
if (difference <= 0) difference += 24 * 3600;
return setTimeout(action, difference * 1000);
}

const StandupTime = '06:00';
const Sunday = 0, Saturday = 6;
function systemReinit() {
const weekDay = new Date().getDay();
//if (weekDay !== Friday && weekDay !== Saturday) {
xapi.command('UserInterface Extensions Panel Clicked', {PanelId: 'panel_init'});
//}
schedule(StandupTime, systemReinit); // schedule it for the next day
}
schedule(StandupTime, systemReinit);
