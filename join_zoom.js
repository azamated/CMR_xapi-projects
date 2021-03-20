const xapi = require('xapi');

const MYSPEED_DIAL_NUMBER = 'zoom1@zoomcrc.com';

xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
    if(event.PanelId === 'JoinZoom'){
         xapi.command("dial", {Number: MYSPEED_DIAL_NUMBER});
    }