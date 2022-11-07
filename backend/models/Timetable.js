const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productScheme = new Schema(
  {
    Monday: {
      type: String,
    },
    Tuesday: {
      type: String,
    },
    Wednesday: {
      type: String,
    },
    Thursday: {
      type: String,
    },
    Friday: {
      type: String,
    },
    Saturday: {
      type: String,
    },
    Sunday: {
      type: String,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productScheme);

module.exports = Product;
