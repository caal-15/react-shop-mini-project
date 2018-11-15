# React Shop Mini Project

A mini project for Showcasing React/Redux

## Installing dependencies

```
npm install
```

## Running the project

```
npm start
```

__NOTE:__ By default this server starts at [localhost:1234](http://localhost:1234) but this can be changed using the `PORT` environment variable.

## Additional Notes and Good to Haves

* The frontend has caching for products, they will not be updated after component mounting unless __5 minutes__ have elapsed since the last successful fetch.
* This project has simple error management built in, this can be easily tested by killing the backend server and triggering a request, for example sending a message through Contact.
* The default endpoint for the backend server is [localhost:8080](http://localhost:8080), but this can be easily changed bis `src/config/server.js`
* This project uses the [Parcel Bundler](https://parceljs.org/).
