# full_stack_assignment_sightbit

please clone this directory and read the manual in order to understend how to make it work.

## Front End Setup

1. Enter the directory "sightbit_front_end" in the terminal and run yarn install.
2. Next, we need to you to get a seacret key from Goole, so you can register using it:
   1. Go to: http://console.developers.google.com/
   2. On the left bar, go click on "OAuth consent screen"
   3. Create an external app.
   4. Fill in "app name": "full_stack_assignment_sightbit".
   5. Fill in "User support email" -> enter your email.
   6. Fill in "Developer contact information" -> enter your email.
   7. Click on "Save and Continue".
   8. Skip "Scopes" and "Test users" by clicking on "Save and Continue" on each page.
   9. Finelly skip the "Summery" by prassing "Back to dashboard".
   10. On the left side bar, click on "Credentials".
   11. Click on "Create credentials".
   12. Now click on "OAuth client ID".
   13. On "Application type" select "Web application".
   14. On name you can use the same name we used before: "full_stack_assignment_sightbit".
   15. Add to "Authorized JavaScript origins" and "Authorized redirect URIs" add http://localhost:3000.
   16. And click on "CREATE" and you'll get your "Your Client ID".
   17. On the base of front end app, create an ".env" file and add there your client ID as:
       REACT_APP_GOOGLE_CLIENT_ID=39642**************\*\*\***************.
       **Importent: if react app was running, reaset the server!!!**
