# ParkingLotExampleJS
Example for a Parking Lot Web App coded in NodeJS and MongoDB. This example is used for the Software Engineering taught by Prof. H. Rocha at Loyola University Maryland.

# MongoDB

You will need MongoDB as a database to run the app here. Go to [https://www.mongodb.com/](https://www.mongodb.com/) and click on "Try Free" button. Fill up the form, register, and look for the confirmation email. Choose the 'Shared Free' to create your cloud server. On the Security QuickStart, choose a username and password to connect to the DB (please take note of these)

After logging into your cloud server on Network Access on the left menu and choose the option when adding an IP address to "access from anywhere" (this will whitelist any IP address, which is necessary to work since your IP address in Loyola will change often).

## Connection String

Change the connection string to your Cloud Server and your database on the '.env' file. Make sure the TESTDB_URI is using a different Schema/Database. 

# Node Express Server

The instructions below are to help you with the back-end Node Express.

## Installing the Components

After cloning the repo, you need to install all the necessary components (libraries) for this project to run. Before anything you need to use the following command line on console/terminal:

```
npm install
```

This command will look over the packages.json file and install all modules listed there. Therefore, it is a good idea to always keep you packages.json up to date.

## Running Node Express server

To run the most current version of our Node.js Express server, just type the following in a command/terminal in the folder of your application.

```
node Server.js
```

If the server is executing successfully, you will see a message like "Server Running on localhost:4000...". The most common errors that prevent running this server are:
- If npm is not recognized as a command, you need to install [NodeJs](https://nodejs.org/)
- Not installing the components before running the server. Just run `npm install` to fix it.
- The port is already in use by another program. In this case, just changed the port in the `.env` file.

## Testing and Coverage

To run tests and display coverage in this repository, all you need to do is use the command:
```
npm test -- --coverage
```

Or, use the script already created there as
```
npm run coverage
```

To configure tests in your own repository you need to:
- Install Jest as a module in your Node Express: `npm install jest` on the root folder of your application.

# React

This project has everything configured to use React. You need to uncomment a line in 'App.js' to allow the react pages to be mapped by the NodeJs Express Server. React modularity is great (so is its testing), but it adds more complex interactions with the server and data sharing among pages/components. 

Our React environment is different from our Node Express server. Both needs to comunicate and work together to compose our website, but they are separate. In this repo (and the classroom examples), we are using the `view` folder for our React environment. Everyhting inside `view` is related to React, everything outside of it belongs to our Node Express server.

