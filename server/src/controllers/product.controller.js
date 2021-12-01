const genericCRUD = require("./generic.controller");
const { Product } = require("../models");
module.exports = {
  ...genericCRUD(Product),
};
