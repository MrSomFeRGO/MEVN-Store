const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");

// Подключение к ДБ
mongoose.connect("mongodb://localhost:8000/mevn-shop", {
  autoIndex: true,
});

// Иничиализация приложения
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Объявление роутов
const PORT = 5000;
http.createServer({}, app).listen(PORT);
console.log(`Server has running on ${PORT}`);
