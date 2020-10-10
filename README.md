# Summary

A mock website to serve a list of products fetched from **Catch of the day** fake api. This website was build using [Create React App](https://github.com/facebook/create-react-app) using Typescript template and **TailwindCSS** for styling the website.

# Setting the project

This project is divided into `client` and `server` directories. `client` dir serves all the code related to **react app** and `server` dir is used to connect to the backend api (to overcome _CORS_ issue).

Assumption: `git` and `node` is already installed

- Clone the repo using `git clone https://github.com/sumitduggal/catch_cc`
- navigate into the project `cd catch_cc`

## Client

The client is written with CRA app with typescript template and tailwindcss for css.

### Setting up client app

from project root cd and install node modules

```bash
cd client && yarn
```

running client app, this will start **client** app on [http://localhost:3000](http://localhost:3000)

```bash
yarn start
```

## Server

Server component in this app is required to overcome the **CORS** issue in api endpoint. Server node app uses `express` to serve up and uses `cors` middleware to allow **client** to connect to the api.

### Setting up server

from project root cd and install node modules

```bash
cd server && yarn
```

running server app, following command will start **server** app on [http://localhost:4000](http://localhost:4000)

```bash
yarn start
```

# Testing

I have added test for the **helper** functions and **component** unit test and **api** handler function using [@testing-library](https://testing-library.com/docs/react-testing-library/intro) written in typescript.

run test:

```bash
cd client && yarn test
```

# Issues found

While working with api endpoint, i cam accross _CORS_ issue hitting the endpoint, so i decided to use a small `node` app using `express` to to serve up and uses `cors` middleware to allow **client** to connect to the api.
