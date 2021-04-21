# Full Stack Assignment Sightbit

please clone this directory and read the manual in order to understend how to run the application.

## Front End Setup

1. Enter the directory "sightbit_front_end" in the terminal and run `yarn install`.
2. Next, we need you to get a secret key from Goole, so you can register using it:

   1. Go to: http://console.developers.google.com/
   2. On the left bar, click on "OAuth consent screen"
   3. Create an external app.
   4. Fill in text box called "app name" as "full_stack_assignment_sightbit".
   5. Fill in "User support email" with your gmail account.
   6. Fill in "Developer contact information" with your gmail account.
   7. Click on "Save and Continue".
   8. for "Scopes" click "save and continue" without filling anything in.
   9. for "Test users" click "save and continue" without filling it in.
   10. on summary ticket click "Back to Dashboard".
   11. On the left side bar, click on "Credentials".
   12. Click on "Create credentials".
   13. On the drop down menu click on "OAuth client ID".
   14. Under "Application type" select "Web application".
   15. In the "Name" text box you can use the same name we used before: "full_stack_assignment_sightbit".
   16. beneath "Authorized JavaScript origins" under "URIs" click "Add URI" and type "http://localhost:3000".
   17. beneath "Authorized redirect URIs" under "URIs" click "Add URIs" and type "http://localhost:3000".
   18. Click on "CREATE" and you'll get a pop up titled with "OAuth client created" with "Your Client ID" which displays "Your Client ID" and "Your Client Secret".
   19. On the base folder of the front end app, create an `.env` file and add there your client ID as:
       `REACT_APP_GOOGLE_CLIENT_ID=39642...................`<br/>
       **Importent: if react app was running, reaset the server!!!**

3. Now, run `yarn start` in order to run the front end.

## Back End Setup

1. In the mail that I sent you, there is an `.env` file, please place it on the base folder of the back end.
2. Enter the directory "back_end" in the terminal and run `yarn install` in order to intall all of the dependencies of the project.
3. run `node server.js` in order to run the server and connect the db.

**Please make sure that both servers are running while testing the app!**
