import mongoose, { Schema } from "mongoose";

const cartItemSchema = new Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    color: {
      type: String,
      required: true,
    }, // product.variants.color
    size: {
      type: String,
      required: true,
    }, // product.variants.size
    quantity: {
      type: Number,
      default: 1,
      min: 1,
    },
    price: {
      // to ensure user can buy item at the rate they added it to the cart and to prevent misuse expiresAt is added.
      type: Number,
      required: true,
    },
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // to ensure evrytime a new expiry date is calculated, whenever a item added to the cart
    },
    image: String,
  },
  { _id: false }
);

const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [cartItemSchema],
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
