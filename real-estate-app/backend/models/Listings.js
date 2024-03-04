const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema ({
    address: {
        type: String,
        required: true
      },
      images: {
        type: [String],
      },
      propertyType: {
        type: String,
        enum: ['RENT', 'BUY'],
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

module.exports = Listing;