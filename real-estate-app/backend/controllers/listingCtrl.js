const express = require('express')
const db = require('../models')

const createListing = async (req, res) => {
    try {
        const newListing = await db.Listings.create(req.body);
        res.status(201).json({ message: "Listing created successfully", data: newListing });
    } catch (error) {
        console.error("Error creating listing:", error);
        res.status(500).json({ message: "Error creating listing" });
    }
}

const getListings = async (req, res) => {
    try {
        const listings = await db.Listings.find();
        res.status(200).json(listings);
    } catch (error) {
        console.error('Error fetching listings:', error);
        res.status(500).json({ message: 'Error fetching listings' });
    }
};

const getListingById = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await db.Listings.findById(id);
        if (!listing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.status(200).json(listing);
    } catch (error) {
        console.error('Error fetching listing by ID:', error);
        res.status(500).json({ message: 'Error fetching listing by ID' });
    }
};

const editListing = (req, res) => {
    db.Listings.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedListing) => {
            if (!updatedListing) {
                res.status(400).json({ message: "Couldn't Update Listing" });
            } else {
                const formattedListing = {
                    id: updatedListing._id,
                    address: updatedListing.address,
                    images: updatedListing.images,
                    propertyType: updatedListing.propertyType,
                    price: updatedListing.price,
                    bedrooms: updatedListing.bedrooms,
                    bathrooms: updatedListing.bathrooms,
                    squareFootage: updatedListing.squareFootage,
                    description: updatedListing.description
                };
                res.status(200).json({ message: "Listing Updated successfully", listing: formattedListing });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server error', error: error.message });
        });
};

const deleteListing = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedListing = await db.Listings.findByIdAndDelete(id);
        if (!deletedListing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.json({ message: 'Listing deleted successfully' });
    } catch (error) {
        console.error('Error deleting listing:', error);
        res.status(500).json({ message: 'Error deleting listing' });
    }
};

module.exports = {
    createListing,
    getListings,
    getListingById,
    editListing,
    deleteListing
}