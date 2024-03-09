import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './show.css'

const ShowListingPage = (props) => {
    const [listings, setListings] = useState([]);
    const navigate = useNavigate();
    const url = 'http://localhost:4000/';

    useEffect(() => {
        fetchAllListings();
    }, []);

    const fetchAllListings = async () => {
        try {
            const response = await fetch(url + "listings");
            if (!response.ok) {
                throw new Error('Failed to fetch listings');
            }
            const listingsData = await response.json();
            setListings(listingsData);
        } catch (error) {
            console.error('Error fetching listings:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(url + `listings/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new error('Failed to delete the listing')
            }
            setListings(prevListings => prevListings.filter(listing => listing._id !== id));
        } catch (error) {
            console.error('Error occurred while deleting listing:', error);
        }
    };

    const handleEdit = (id) => {
        const listingToEdit = listings.find(listing => listing._id === id);
        if (!listingToEdit) {
            console.error(`Listing with ID ${id} not found`);
            return;
        }
        navigate(`/edit/${id}`, { listing: listingToEdit });
    };

    return (
        <div>
            {listings.length === 0 ? (
                <div>loading...</div>
            ) : (
                <div>
                    {listings.map((listing, index, _id) => (
                        <div key={index}>
                            <div className='featured'>
                                <h1 className='featured-text'>{listing.address}</h1>
                                <div className='container'>
                                    {listing.images[0] && <img className='span-3 image-grid-row-2' src={listing.images[0]} alt={listing.images[0]} /> }
                                    {listing.images[1] && <img src={listing.images[1]} alt={listing.images[0]} />}
                                    {listing.images[2] && <img src={listing.images[2]} alt={listing.images[0]} />}
                                    {listing.images[3] && <img src={listing.images[3]} alt={listing.images[0]} />}
                                    {listing.images[4] && <img src={listing.images[4]} alt={listing.images[0]} />}
                                    <div className='img-details span-5 info-grid' >
                                        <div className='info'  >
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
                                            <button className='btn' style={{ marginRight: '15px' }} onClick={() => handleEdit(listing._id)}>Edit</button>
                                            <button className='btn' style={{ marginRight: '15px' }} onClick={() => handleDelete(listing._id)}>Delete</button>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ShowListingPage;
