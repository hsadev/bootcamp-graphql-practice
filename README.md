# DEV Bootcamp Backend Starter

### Getting Started

To start your project built off of this repository, click the **Fork** button in the top right of the github GUI. This will create a copy of this repository under your account. Share this repository with your team members so that everyone may work off of it.

### Running the project

Make sure necessary environment variables have been set, which includes the DB credentials. To create an ElephantSQL database and access the required credentials, see the section on [setting up the development environment](#Set-up-a-development-environment).

```bash
npm i
npm run dev
```

## Project Layout

### Project Structure

The repo was built by the general frontend web file structure conventions we use at DEV. It has react-router, apollo-client, and ThemeProvider from styled-components set up in src/App.js.


```
project-repo-name
|
└───node_modules
|
└───data
│
└───src
│   │   cleanup.js
|   |   index.js
│   │
│   └───config
|   |   └───index.js
│   |
│   └───db
│   |   └───migrations
│   |   └───seeds
│   │
│   └───graphql
│   |   └───resolvers.js
│   |   └───router.js
│   |   └───typeDefs.js
│   |   └───Mutation
│   |   └───Query
│   |
│   └───lib
│   |   └───auth
│   |   └───context
│   |   └───cronjob
│   |   └───formatError
│   |   └───knex
│   |   └───permissions
│   |
│   └───models
│       └───BaseModel.js
|
└───test
|
|   .env
|   .eslintrc.json
|   .gitignore
|   knexfile.js
|   nodemon.json
|   package-lock.json
|   package.json
|   README.md
```

### Important Directories and Files

- **src**

  - The main directory. Used to store all application code.

- **src/index.js**

  - This is where the server itself is set up using Express. Cron jobs can be added here.

- **config/index.js**

  - Used to store constants that are important to the functionality of the app (like API urls, API keys, database credentials, etc.)

- **.env**

  - Here is where all the sensitive environment variables that are referenced by the config live.

- **migrations**

  - This is where all migrations are kept. Make sure to only add migrations with the command `npx knex migrate:make <name>`

- **graphql/typeDefs.js**

  - Here is the GraphQL TypeDefs.

- **graphql/Mutation & graphql/Query**

  - Under the Mutation and Query folders are all the resolvers. What is here corresponds directly to what is in the TypeDefs.

- **graphql/router.js**

  - Here is where the GraphQL router is set up. It handles all the network requests. If you need to apply any middleware. it should be done here.

- **lib**

  - This directory contains library code that is used across the app. The only things that are really important to understand are the password and token helpers.

- **models**

  - This is where all the Objection models are kept. Make sure to keep this in sync with any changes to the migrations.

## Set up a development environment

- To make development easier, we will use ElephantSQL's free plan to host a different database in the cloud for each engineer. It is always on and never fails so your computer stays free.

  - Sign up for a free personal account [here](https://customer.elephantsql.com/login). There is also a log in with Github option.
  - Once you have signed in, click the **Create New Instance** button on the top right.
  - Add a name, probably something like `app-name-db` and keep it on the free `Tiny Turtle` plan. You shouldn't need to add any payment information! Press **Select Region**.
  - Select the `US-East-1` as the region and press **Review**. and then **Create Instance**.
  - This should take you back to your list of your created instances (databases). Click on the one you just made.
  - Under the Details section you should see **Server**, **User & Default database**, and **Password**. These are the credentials you need to connect to the database.

* Connect to the database

  - Run `cp sample.env .env` in your terminal to create the .env file.
  - Add all the credentials from ElephantSQL to the corresponding fields in the .env file. It should probably end up looking something like this:
    <br />
    <br />

  ```
  DB_HOST=salt.db.elephantsql.com
  DB_DATABASE=abcdefgh
  DB_USER=abcdefgh
  DB_PASSWORD=abcdefghabcdefghabcdefghabcdefgh
  DB_PORT=5432
  NODE_ENV=development
  ```
