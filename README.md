# E-commerce
An E-commerce Website using MERN Stack
## Database Schema

### User
- **username**: String (required, unique, lowercase, trimmed)
- **email**: String (required, unique)
- **password**: String (required, unique)
- **avatar**: String
- **isAdmin**: Boolean (default: false)
- **phone**: Number (required, unique)
- **addresses**: Array of Address

### Address
- **street**: String
- **city**: String
- **state**: String
- **pincode**: Number
- **country**: String

### Product
- **title**: String (required)
- **description**: String (required)
- **price**: Number (required)
- **discountPrice**: Number
- **image**: Array of Strings
- **category**: ObjectId (ref: Category, required)
- **brand**: String (required)
- **variants**: Array of Variant
- **ratingsAverage**: Number (default: 0, min: 0, max: 5)
- **ratingsCount**: Number (default: 0)

### Variant
- **color**: String (required)
- **size**: String (required)
- **stock**: Number (default: 0)
- **price**: Number (required)
- **image**: String

### Category
- **name**: String (required, unique)
- **description**: String
- **parentCategory**: ObjectId (ref: Category, default: null)

### Order
- **user**: ObjectId (ref: User, required)
- **items**: Array of OrderItem
- **totalAmount**: Number (required)
- **shippingAddress**: Array of Address
- **paymentStatus**: String (enum: [pending, paid, failed], default: pending)

### OrderItem
- **product**: ObjectId (ref: Product, required)
- **quantity**: Number (required)
- **price**: Number (required)

### Cart
- **user**: ObjectId (ref: User, required)
- **items**: Array of CartItem

### CartItem
- **product**: ObjectId (ref: Product, required)
- **color**: String (required)
- **size**: String (required)
- **quantity**: Number (default: 1, min: 1)
- **price**: Number (required)
- **expiresAt**: Date

### Wishlist
- **user**: ObjectId (ref: User, required)
- **items**: Array of WishlistItem

### WishlistItem
- **product**: ObjectId (ref: Product, required)
- **color**: String (required)
- **size**: String (required)
- **image**: String

