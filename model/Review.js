const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema(
  {
    rating: {
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
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: true,
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "product",
      required: true,
    },
  },
  { timestamps: true }
);

//compound index
ReviewSchema.index({ product: 1, user: 1 }, { unique: true });

ReviewSchema.statics.calculateAverageRating = async function (productId) {
  console.log(productId);
};

ReviewSchema.post("save", async function () {
  await this.constructor.calculateAverageRating(this.productId);
});

ReviewSchema.post("remove", async function () {
  await this.constructor.calculateAverageRating(this.productId);
});

module.exports = mongoose.model("review", ReviewSchema);
