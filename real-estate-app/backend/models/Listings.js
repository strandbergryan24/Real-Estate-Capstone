const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema ({
    address: {
        type: String,
        required: true
      },
      images: {
        type: [String],
        validate: {
          validator: function(images) {
            return images.length >= 1 && images.length <= 5;
          },
          message: 'At least one image is required, and no more than 5 images are allowed.'
        }
      },
      propertyType: {
        type: String,
        enum: ['RENT', 'SALE'],
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      bedrooms: {
        type: Number,
        required: true
      },
      bathrooms: {
        type: Number,
        required: true
      },
      squareFootage: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
})

const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing