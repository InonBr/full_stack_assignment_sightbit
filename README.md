# Full Stack Assignment Sightbit

please clone this directory and read the manual in order to understend how to run the application.

## Front End Setup

We have two types of front end apps, one, using react redux (the repository name is "react_redux_front_end") and one is using vanilla react, using hooks in order to pass the states (the repository name is "sightbit_front_end").
The set up for both types of the front end react apps is the same, please follow instructions below.

1. Enter the directory "sightbit_front_end" or "react_redux_front_end" in the terminal and run `yarn install`.
2. Next, we need you to get a secret key from Goole, so you can register using it:

   1. Go to: http://console.developers.google.com/
   2. On the left bar, click on "OAuth consent screen"
   3. Create an external app.
   4. Fill in text box called "app name" as "full_stack_assignment_sightbit".
   5. Fill in "User support email" with your gmail account.
   6. Fill in "Developer contact information" with your gmail account.
   7. Click on "Save and Continue".
   8. For "Scopes" click "save and continue" without filling anything in.
   9. For "Test users" click "save and continue" without filling it in.
   10. On summary ticket click "Back to Dashboard".
   11. On the left side bar, click on "Credentials".
   12. Click on "Create credentials".
   13. On the drop down menu click on "OAuth client ID".
   14. Under "Application type" select "Web application".
   15. In the "Name" text box you can use the same name we used before: "full_stack_assignment_sightbit".
   16. Beneath "Authorized JavaScript origins" under "URIs" click "Add URI" and type "http://localhost:3000".
   17. Beneath "Authorized redirect URIs" under "URIs" click "Add URIs" and type "http://localhost:3000".
   18. Click on "CREATE" and you'll get a pop up titled with "OAuth client created" with "Your Client ID" which displays "Your Client ID" and "Your Client Secret".
   19. On the base folder of the front end app, create an `.env` file and add there your client ID as:
       `REACT_APP_GOOGLE_CLIENT_ID=39642...................`<br/>
       **Important: if react app was running, reset the server!!!**

3. Now, run `yarn start` in order to run the front end.

## Back End Setup

1. In the email that I sent you, there is a `.env` file, please place it in the base folder of the back end.
2. Enter the directory "back_end" in the terminal and then run `yarn install` in order to intall all of the dependencies required for the project.
3. run `node server.js` in terminal in order to run the server and connect to the database.

**Please make sure that both servers are running while testing the app!**
