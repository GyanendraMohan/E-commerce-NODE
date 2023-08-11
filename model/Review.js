const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
  {
    ratings: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, "Please Provide Rating"],
    },
    title: {
      type: String,
      trim: true,
      required: [true, "Please Provide review title"],
      maxlength: 100,
    },
    comment: {
      type: String,
      required: [true, "Please Provide review text"],
    },
    user: {
      type: mongoose.Scheema.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Scheema.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true }
);

//compound index
ReviewSchema.index({ product: 1, user: 1 }, { unique: true });

module.exports = mongoose.model("Review", ReviewSchema);
