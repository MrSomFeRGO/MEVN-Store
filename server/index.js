const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const { routes } = require("./src/routes");
// Подключение к ДБ
mongoose.connect("mongodb://localhost:8000/mevn-shop", {
  autoIndex: true,
});

// Иничиализация приложения
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach((item) => {
  app.use(`/api/${item}`, require(`./src/routes/${item}`));
});

// Объявление роутов
const PORT = 5000;
http.createServer({}, app).listen(PORT);
console.log(`Server has running on ${PORT}`);
