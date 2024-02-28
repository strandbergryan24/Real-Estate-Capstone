import React, { useState, useEffect } from 'react';

const ShowListingPage = () => {
    const [listing, setListing] = useState(null);

    useEffect(() => {
        fetchListingDetails();
    }, []);

    const fetchListingDetails = async () => {
        try {
            const response = await fetch('API_ENDPOINT_HERE'); // Replace 'API_ENDPOINT_HERE' with your actual API endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch listing details');
            }
            const listingData = await response.json();
            setListing(listingData);
        } catch (error) {
            console.error('Error fetching listing details:', error);
        }
    };

    if (!listing) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Listing Details</h1>
            <div>
                <h2>Address</h2>
                <p>{listing.address}</p>
            </div>
            <div>
                <h2>Pictures</h2>
                <div className="image-carousel">
                    {listing.images.map((image, index) => (
                        <img key={index} src={image} alt={`Listing ${index}`} />
                    ))}
                </div>
            </div>
            <div>
                <h2>Listing Information</h2>
                <div>
                    <p><strong>Property Type:</strong> {listing.propertyType}</p>
                    <p><strong>Price:</strong> {listing.price}</p>
                    <p><strong>Bedrooms:</strong> {listing.bedrooms}</p>
                    <p><strong>Bathrooms:</strong> {listing.bathrooms}</p>
                    <p><strong>Square Footage:</strong> {listing.squareFootage}</p>
                </div>
            </div>
            <div>
                <p>{listing.description}</p>
            </div>
        </div>
    );
};

export default ShowListingPage;
