# A Node.js based Secure REST API application

**Technologies used include:**

* **Node.js**

* **Express.js**

* **MongoDB**

* **JWT**

## Setup:

This guide assumes you already have MongoDB and NodeJS installed. Click <a href="https://github.com/esfiddle/esfiddle/blob/develop/docs/HOW_TO_INSTALL_NODEJS_AND_MONGODB.md">here</a> for instructions on how to install MongoDB and NodeJS

```sh
# Clone the repo
$ git clone https://github.com/patelg123/nodejs-rest-api-application.git

# Go into the repo
$ cd nodejs-rest-api-application.git

# Install the dependencies and build for the first time
$ npm i && npm run build

# Setup the environment
# The default values should work fine, but edit them in the .env to make any changes
$ cp .env.example .env

# start the application
$ npm start

# test the application
$ npm watch:test
