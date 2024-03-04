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

const editListing = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await db.Listing.findById(id);
        if (!listing) {
            return res.status(404).json({ message: 'Listing not found' });
        }

        res.status(200).json({ listing });
    } catch (error) {
        console.error('Error fetching listing for edit:', error);
        res.status(500).json({ message: 'Error fetching listing for edit' });
    }
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
    editListing,
    deleteListing
}