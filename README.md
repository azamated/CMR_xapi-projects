<h1>Scripts for CIsco Collaboration Endpoints</h1>

**1.	AdminTools.** The script monitors for an event when the “System Control Tools” button is clicked. Once clicked, the script asks for a password, and once the password has been provided the “admin” panel is opened.

![image](https://user-images.githubusercontent.com/45620101/111865190-9aba9f00-8976-11eb-9097-bdec423e9815.png)
 
**2.	AdminGuide.** The script monitors for an event when the widget is clicked. Once clicked, the script opens a pop-up widow with a text (user/admin guide).

![image](https://user-images.githubusercontent.com/45620101/111865405-cdb16280-8977-11eb-9c71-585bbe99948d.png)

**3.	Join Zoom Button** The script dials the zoom SIP dial- in URI to join a Zoom video conference.

![image](https://user-images.githubusercontent.com/45620101/111865420-defa6f00-8977-11eb-85bc-056c2ed28856.png)

**4.	More Tools.** The script provides functionality for the buttons under the “More Tools” panel. Each button in the panel has its own code in the script.

![image](https://user-images.githubusercontent.com/45620101/111865318-74493380-8977-11eb-90f1-898baa3ab628.png)
 
**5.	Pop-up alert.** The script triggers a pop-up text when buttons are clicked.
 
 ![image](https://user-images.githubusercontent.com/45620101/111865327-81feb900-8977-11eb-9e26-ce141dc4f9d2.png)

**6.	SpeedDials.** The script contains code that allows the speed dial buttons work.
 
**7.	SystemInit.** This script contains two parts.  First:  Once the Cisco codec is restarted, after 5 seconds the “Reinit ½” phase starts, which synchronizes all feedback&presents between AV2 and SX80. Then, after 35 seconds after Cisco SX80 restart, the “Reinit 2/2” phase starts, which doies the same (to make sure all feedback&presets are sync). Tis script helps to keep systems in sync and running. Second: The script makes a periodic synchronisation daily at 6am.

**8.	SystemStatus.** This script monitors the status of the widget “widget_67” (Power Off button). If the widget has a value “inactive” (which means the systems are OFF) the script will pop-up a text message “System is currently OFF, Turn it ON? If the user press “Yes”, the system will start.
 
 ![image](https://user-images.githubusercontent.com/45620101/111865333-904cd500-8977-11eb-9abb-2b65666301c5.png)
 
**9.	Room Capacity Alert.** The script allows pop-up notifications on the screen and touch panel when the room capacity has been exceeded (COVID alert).

