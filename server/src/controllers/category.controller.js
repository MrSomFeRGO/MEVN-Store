const genericCRUD = require("./generic.controller");
const { Category } = require("../models");
module.exports = {
  ...genericCRUD(Category),
};
