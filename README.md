# exercise-logging-app

### Downloading zip file

Download the zip file, then open the unzipped file in a code editor of your choice.

System Architecture:

I used create-react-app to create a react frontend, which is linked to a NodeJs backend using Express.
A Mongodb database with Atlas is connected to the backend, which is used to store exercises which are
added through the react frontend.

System Requirements:

In order to use this app, you must first install the node modules for the backend and frontend respectively, via the terminal.
Run the backend server by typing 'npm start' into the terminal, to start the server on localhost:5000. This will the start the server, which will listen for requests from the frontend, on port 5000. The backend will then establish a connection to the Mongodb database.


Then after 'cding' into the frontend, type 'npm start', via the terminal, to start the frontend on localhost:3000. You will now be able to sign in
with your gmail account, then after you will be able to create, update and delete users and exercises from the database. 


End User Instructions:

In order to use this app, the end user must be familiar with the terminal, and must have access to a code editor.
Once this app is opened in the code editor, the end user can cd into the backend and type 'npm start' in order to start the server,
which will listen for requests from the frontend and connect to the atlas mongodb database.

Then the end user can cd into the frontend, and type 'npm start', which will launch the react frontend in the browser.
Now the end user will be able to sign in with their gmail account, then they can add, update and delete users and exercises from the mongodb database.

To end the server for both the frontend and backend respectively, the end user will have to type 'ctrl + c' into the terminal for
both the frontend and backend.
