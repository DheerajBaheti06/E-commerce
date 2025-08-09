import mongoose, { Schema } from "mongoose";

const wishlistItem = new Schema(
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
    image: String,
  },
  { _id: false }
);

const wishlistSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [wishlistItem],
  },
  { timestamps: true }
);

wishlistSchema.methods.addItem = function (item) {
  const exists = this.items.some(
    (i) =>
      i.product.equals(item.product) &&
      i.color === item.color &&
      i.size === item.size
  );
  if (!exists) this.items.push(item);
};

wishlistSchema.pre(/^find/, function(next) {
  this.populate('items.product', 'title description brand'); // return reference product details also along with  item detail
  next();
});


export const Wishlist = mongoose.model("Wishlist", wishlistSchema);
