const {
  model,
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
    default: "",
    required: true,
  },
  description: {
    type: String,
    default: "",
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
    required: true,
  },
  imageUrl: {
    type: String,
    default: "",
    required: true,
  },
  category: {
    type: ObjectId,
    ref: "Category",
  },
});

module.exports = model("Product", schema);
