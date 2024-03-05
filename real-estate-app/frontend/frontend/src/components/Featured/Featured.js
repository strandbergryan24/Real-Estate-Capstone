import React, { useState, useEffect } from 'react';
import './Featured.css';

const Featured = () => {
    const url = 'http://localhost:4000';
    const [listing, setListings] = useState([]);

    useEffect(() => {
        fetchListings();
    }, []);

    const fetchListings = async () => {
        try {
            const response = await fetch(url + '/');
            if(!response.ok) {
                throw new Error('Failed to fetch listings');
            }
            const data = await response.json();
            setListings(data);
        } catch (error) {
            console.error('Error fetching listings:', error);
        }
    };

    return (
        <div className='featured'>
            <h1 className='featured-text'>{listening.address}</h1>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={listing.image} alt='' />
                <img src={listing.image} alt={listing.image} />
                <img src={listing.image} alt={listing.image} />
                <img src={listing.image} alt={listing.image} />
                <img src={listing.image} alt={listing.image} />
                <div className='img-details span-5 info-grid'>
                    <div className='info'>
                        <p>HOME FOR SALE</p>
                    </div>
                    <div className='info'>
                        <p>Price: ${listing.price}</p>
                    </div>
                    <div className='info'>
                        <p>Number of Bedrooms: {listing.bedrooms}</p>
                    </div>
                    <div className='info'>
                        <p>Number of bathrooms: {listing.bathrooms}</p>
                    </div>
                    <div className='info'>
                        <p>Square Footage: {listing.squareFootage} sqft</p>
                    </div>
                    <div className='span-5 discription'>
                        <p>{listing.description}</p>
                    </div>
                    <div className='span-5'>
                        <button className='btn'> View Listing </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
