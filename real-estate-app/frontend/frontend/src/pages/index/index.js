import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Featured = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        axios.get('/api/listings')
            .then(response => {
                setListings(response.data);
            })
            .catch(error => {
                console.error('Error fetching listings:', error);
            });
    }, []);

    return (
        <div className='featured'>
            <div className='container'>
                {listings.map(listing => (
                    <div key={listing._id} className='listing-container'>
                        <img className='listing-image' src={listing.images[0]} alt={listing.address} />
                        <div className='img-details info-grid'>
                            <div className='info'>
                                <p>{listing.propertyType} FOR {listing.propertyStatus}</p>
                            </div>
                            <div className='info'>
                                <p>PRICE: ${listing.price}</p>
                            </div>
                            <div className='info'>
                                <p>Number of Bedrooms: {listing.bedrooms}</p>
                            </div>
                            <div className='info'>
                                <p>Number of Bathrooms: {listing.bathrooms}</p>
                            </div>
                            <div className='info'>
                                <p>Square Footage: {listing.squareFootage} sqft</p>
                            </div>
                            <div className='description'>
                                <p>{listing.description}</p>
                            </div>
                            <div className='view-btn'>
                                <button className='btn'>View Listing</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;
