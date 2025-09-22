# ParkingLotExampleJS
Example for a Parking Lot Web App coded in NodeJS and MongoDB. This example is used for the Software Engineering taught by Prof. H. Rocha at Loyola University Maryland.

# MongoDB

You will need MongoDB as a database to run the app here. Go to [https://www.mongodb.com/](https://www.mongodb.com/) and click on "Try Free" button. Fill up the form, register, and look for the confirmation email. Choose the 'Shared Free' to create your cloud server. On the Security QuickStart, choose a username and password to connect to the DB (please take note of these)

After logging into your cloud server on Network Access on the left menu and choose the option when adding an IP address to "access from anywhere" (this will whitelist any IP address, which is necessary to work since your IP address in Loyola will change often).

## Connection String

Change the connection string to your Cloud Server and your database on the 

# Node Express Server

The instructions below are to help you with the back-end Node Express.

## Installing the Components

To install all the necessary components for this project, you need to use the following:

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
- Not installing the components before running the server. Just run `npm install` to fix it.
- The port is already in use by another program. In this case, just changed the port in the `.env` file.

## Testing and Coverage

To run tests and display coverage in this repository, all you need to do is use the command:
```
npm test -- --coverage
```

To configure tests in your own repository you need to:
- Install Jest as a module in your Node Express: `npm install jest` on the root folder of your application.

# React

Our React environment is different from our Node Express server. Both needs to comunicate and work together to compose our website, but they are separate. In this repo (and the classroom examples), we are using the `view` folder for our React environment. Everyhting inside `view` is related to React, everything outside of it belongs to our Node Express server.

## Setting the Current Folder

Every command you type related to React must be done inside our React folder, in this repo it means the `view` folder. Therefore, before running any command make sure your current folder is set to `view`. If you are in the root aplication folder just type:
```
cd view
```

## Running React

React will automatically run the code inside `index.jsx` and inject it into `index.html`. To run React just type the following in the view folder:
```
npm start
```

Your react webpage should ran on `localhost:3000`

## Deploying React

To deploy our React web page to be used in a real web server, we need to execute the following command:
```
npm run build
```

The above commnad will create or replace a folder called `build` which will contain your 'compiled' website React front-end. The Node Express server in this repo is already configure to watch the same folder and serve those files to client requests. Therefore, by building your React code, it will automatically deploy those files into our server.


