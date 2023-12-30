# API with NodeJS and MongoDB

## Description

This is a simple API with NodeJS and MongoDB. It is a simple CRUD with a Product model. It perform the following actions:

- Add a Qoute
- Read Qoutes
- Update a Qoute
- Delete a Qoute

## 🚀 [Live Demo]

- [Live Demo](https://asad-zaidi.github.io/Qoutes-API/)

## 🚀 Live BackEnd Demo <a name="live-demo"></a>

- [Live BackEnd Link](https://asad-zaidi.github.io/Qoutes-API/)

    To test the API you can use Postman or Insomnia

## Installation

To install this API you need to have installed NodeJS and MongoDB. Then you need to clone this repository and run the following command:

```bash
npm install
```

```bash
npm install mongoose
```

```bash
npm install express
```

## Usage

To use this API you need to run the following command:

```bash
node index.js 
```
or

```bash
nodemon ./bin/www 
```

You can also change the port in the bin/www and .env file.
To test the API at port 3000 you can use Postman or Insomnia and perform the following requests:

- Create a Product: POST http://localhost:3000/api/qoutes
- Read all Product: GET http://localhost:3000/api/qoutes
- Read a Product: GET http://localhost:3000/api/:id
- Update a Product: PUT http://localhost:3000/api/:id
- Delete a Product: DELETE http://localhost:3000/api/:id

## Contributing

Issues and pull requests are welcome!

## License

[MIT](https://choosealicense.com/licenses/mit/)