const mongoose = require("mongoose");

const ProductScheema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: [true, "Please provide the name of the product"],
      maxlength: [100, "Name can not exceed 100 characters"],
    },
    price: {
      type: Number,
      require: [true, "Please provide the price of the product"],
      default: 0,
    },
    description: {
      type: String,
      require: [true, "Please provide the description of the product"],
      maxlength: [1000, "Description can not exceed 1000 characters"],
    },
    images: {
      type: String,
      default: "/uploads/example.jpeg",
    },
    category: {
      type: String,
      required: [true, "Please provide the product category"],
      enum: ["office", "kitchen", "bedroom"],
    },
    compnay: {
      type: String,
      required: [true, "Please provide the product company"],
      enum: {
        values: ["ikea", "liddy", "marcos"],
        message: "{VALUE} is not supported",
      },
    },
    colors: {
      type: [String],
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    inventory: {
      type: Number,
      required: true,
      default: 15,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductScheema);
