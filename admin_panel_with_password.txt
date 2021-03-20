const xapi = require('xapi');
const PASS = 'admin'
xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
  switch (event.PanelId){
    case 'admin_Entry':
      xapi.command('UserInterface Message TextInput Display', {
        Title: 'Unlock Admin Features',
        Text: 'Please Enter your Passphrase',
        FeedbackId: 'disengageLock',
        PlaceHolder: 'Password',
        InputType: 'Numeric',
        KeyboardState: 'Open',
        SubmitText: 'Unlock',
        Duration :30
      });
      break;
  }
})
xapi.event.on('UserInterface Message TextInput Response',(event) => {
  if (event.FeedbackId === 'disengageLock')
  switch (event.Text){
    case PASS: 
      xapi.command('UserInterface Extensions Panel Open', {
        PanelId: 'admin'
      });
      break;
    default:
      xapi.command('UserInterface Message Alert Display', {
        Title: 'Access Denied',
        Text: 'Please try again or contact a system administrator.'
      });
      break;
  }})