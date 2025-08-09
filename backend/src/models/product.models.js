import mongoose, { Schema } from "mongoose";

const variantSchema = new Schema(
  {
    color: { type: String, required: true },
    size: { type: String, required: true },
    stock: { type: Number, default: 0 },
    price: { type: Number, required: true },
    image: String,
  },
  { _id: false }
);

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: Number,
    image: [{ type: String }],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    variants: [variantSchema],
    ratingsAverage: { type: Number, default: 0, min: 0, max: 5 },
    ratingsCount: { type: Number, default: 0 }, // no. of people rated
  },
  { timestamps: true }
);

productSchema.index({ brand: 1, price: 1 });
productSchema.index({ category: 1, price: 1 });
productSchema.index({ title: "text", description: "text" });

export const Product = mongoose.model("Product", productSchema);
