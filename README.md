The app uses a **client** and **server** structure to fetch the data from a **CORS** blocked api endpoint.

## Client

The client is written with CRA app with typescript template and tailwindcss for css.

### setting up client app

from project root

```
cd client
```

to install node modules

```
yarn
```

running client app

```
yarn start
```

this will start **client** app on [http://localhost:3000](http://localhost:3000)

## Server

Server component in this app is required to overcome the **CORS** issue in api endpoint.

Server node app uses `express` to serve up and uses `cors` middleware to allow **client** to connect to the api.

### setting up server

from project root

```
cd server
```

install node modules

```
yarn
```

running server app

```
yarn start
```
