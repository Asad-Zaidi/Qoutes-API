# Qoutes API

## Description

This is a simple API with NodeJS and MongoDB. It is a simple CRUD with a Qoutes model. It perform the following actions:

- Add a Qoute
- Read Qoutes
- Update a Qoute
- Delete a Qoute

## 🚀 [Live Demo Link]

- [Live Demo](https://asad-zaidi.github.io/Qoutes-API/)

## 🚀 [Live BackEnd Demo]

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

- Read all Qoutes: GET [http://localhost:3000/api/qoutes]
- Add a Qoute: POST [http://localhost:3000/api/qoutes]
- Read a Qoute: GET [http://localhost:3000/api/:id]
- Update a Qoute: PUT [http://localhost:3000/api/:id]
- Delete a Qoute: DELETE [http://localhost:3000/api/:id]

## Contributing

Issues and pull requests are welcome!

## License

This project is [MIT](./LICENSE) licensed.

