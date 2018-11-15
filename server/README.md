# React Shop Mini Project Backend Server

A small backend server constructed using restify, meant to be used with React Shop Mini Project Frontend.

## API

* `GET /products`: Retrieves all products.
* `POST /messages`: Endpoint for creating a message (right now it's just an echo).

## Installing dependencies

```
npm install
```

## Running the project

```
npm start
```

__NOTE:__ By default this server starts at [localhost:8080](http://localhost:8080) but this can be changed using the `PORT` environment variable.

## Additional Notes

* This server has a __1 second__ delay per response, so that the Frontend can showcase it's behavior when content is being fetched.
