const db = require('../models')

const createListing = (req, res) => {
    if(!req.session.currentUser) {
        return res.status(400).json({ message: "No Active Session Found" });
    };
    const newListing = {
        ...req.body,
        user: req.session.currentUser.id
    };
    db.Listings.create(newListing).then((createdListing) => { 
        if(!createdListing) {
            return res.status(400).json({ message: "Cannot Create Listing"})
        }
            return db.Users.findByIdAndUpdate(
                req.session.currentUser.id,
                {$push: {trips: createdTrip._id}},
                {new: true}
            );
    }).then((updatedUser) => {
        if(updatedUser) {
            return res.status(201).json({ message: "Trip created and user updated successfully"})
        } else {
            return res.status(404).json({ message: "User Not Found or not Updated"})
        }
    })
    .catch((error) => {
        console.error("Error in trip creating or updating user: ", error);
        return res.status(500).json({ message: "Error Created Lisitng or Updating User"})
    })
}

const getListing = (req, res) => {
    db.Listings.find({ user: req.session.currentUser.id})
    .then((foundListings) => {
        if(!foundListings) {
            res.status(400).json({message: "Cannot find trips"})
        } else {
            res.status(200).json({data:foundListings})
        }
    })
}

const updateListing = (req, res) => {
    const userId = req.session.currentUser.id
    db.Listings.findOneAndUpdate({_id: req.params.id, user: userId}, req.body, {new:true})
    .then((updatedListing) => {
        if(!updatedListing) {
            res.status(400).json({message: "Couldn't update trip"})
        } else {
            res.status(200).json({message: "Trip updated successfully"})
        }
    })
    .catch((error) =>{
        res.status(500).json({message: "Server Error", error:error.message})
    })
}

const deleteListing = (req, res) => {
    const userId = req.session.currentUser.id 
    db.Listings.findOneAndDelete({ _id: req.params.id, user: userId})
    .then((deletedListing) => {
        if(!deletedListing) {
            return res.status(400).json({ message: "Couldn't Delete Listing"})
        } 
            return db.Users,findOneAndUpdate({_id: userId}, {$pull: {trips: req.params.id}})
            .then((updatedUser) => {
                if(!updatedUser) {
                    res.status(400).json({ message: "Couldn't update Listing"})
                } else {
                    res.status(200).json({ message: "removed trip from user"})
                }
            })
            .catch((error) => {
                res.status(500).json({message: "Server error", error:error.message})
            })
    })
}

module.exports = {
    createListing,
    getListing,
    updateListing,
    deleteListing
}