const mongoose = require("mongoose");
const { productSchema } = require("./product.model");
const config = require("../config/config");
// const { string } = require("joi");

// TODO: CRIO_TASK_MODULE_CART - Complete cartSchema, a Mongoose schema for "carts" collection
const cartSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    cartItems: [
      {
        product: { type: productSchema, required: true, min: 1 },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    paymentOption: {
      type: String,
      default: config.default_payment_option,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Cart
 */
const Cart = mongoose.model("Cart", cartSchema);

module.exports.Cart = Cart;
