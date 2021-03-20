<h1>Scripts for CIsco Collaboration Endpoints</h1>

**1.	AdminTools.** The script monitors for an event when the “System Control Tools” button is clicked. Once clicked, the script asks for a password, and once the password has been provided the “admin” panel is opened.

**2.	AdminGuide.** The script monitors for an event when the widget is clicked. Once clicked, the script opens a pop-up widow with a text (user/admin guide).

**3.	Join Zoom Button** The script dials the zoom SIP dial- in URI to join a Zoom video conference.

**4.	More Tools.** The script provides functionality for the buttons under the “More Tools” panel. Each button in the panel has its own code in the script.
 
**5.	Pop-up alert.** The script triggers a pop-up text when buttons are clicked.
 
**6.	SpeedDials.** The script contains code that allows the speed dial buttons work.
 
**7.	SystemInit.** This script contains two parts.  First:  Once the Cisco codec is restarted, after 5 seconds the “Reinit ½” phase starts, which synchronizes all feedback&presents between AV2 and SX80. Then, after 35 seconds after Cisco SX80 restart, the “Reinit 2/2” phase starts, which doies the same (to make sure all feedback&presets are sync). Tis script helps to keep systems in sync and running. Second: The script makes a periodic synchronisation daily at 6am.

**8.	SystemStatus.** This script monitors the status of the widget “widget_67” (Power Off button). If the widget has a value “inactive” (which means the systems are OFF) the script will pop-up a text message “System is currently OFF, Turn it ON? If the user press “Yes”, the system will start.
 
**9.	Room Capacity Alert.** The script allows pop-up notifications on the screen and touch panel when the room capacity has been exceeded (COVID alert).
