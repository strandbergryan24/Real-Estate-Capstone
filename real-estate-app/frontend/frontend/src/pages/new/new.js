import React, { useState } from 'react';
import styles from './new.css'

const ListingForm = () => {
    const [listing, setListing] = useState({
        address: '',
        propertyType: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        squareFootage: '',
        description: '',
        imageLinks: ['', '', '', '', '']
    });

    const handleInputChange = (e, index) => {
        const updatedLinks = [...listing.imageLinks];
        updatedLinks[index] = e.target.value;
        setListing({ ...listing, imageLinks: updatedLinks });
    };

    const handlePropertyTypeChange = (e) => {
        setListing({ ...listing, propertyType: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="listing-form-container">
            <h1>Listing Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <p>Address: <input type="text" className="custom-input" name="address" value={listing.address} onChange={(e) => handleInputChange(e, 0)} required /></p>
                </div>
                <div className="form-radio">
                    <p>Property Type:  </p>
                    <label>
                        <input
                            type="radio"
                            name="propertyType"
                            value="RENT"
                            checked={listing.propertyType === 'RENT'}
                            onChange={handlePropertyTypeChange}
                            required
                        /> Rent
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="propertyType"
                            value="BUY"
                            checked={listing.propertyType === 'BUY'}
                            onChange={handlePropertyTypeChange}
                            required
                        /> Buy
                    </label>
                </div>
                <div className="form-group">
                    <p>Price: <input type="number" className="custom-input" name="price" value={listing.price} onChange={(e) => handleInputChange(e, 2)} required /></p>
                </div>
                <div className="form-group">
                    <p>Bedrooms: <input type="number" className="custom-input" name="bedrooms" value={listing.bedrooms} onChange={(e) => handleInputChange(e, 3)} required /></p>
                </div>
                <div className="form-group">
                    <p>Bathrooms: <input type="number" className="custom-input" name="bathrooms" value={listing.bathrooms} onChange={(e) => handleInputChange(e, 4)} required /></p>
                </div>
                <div className="form-group">
                    <p>Square Footage: <input type="text" className="custom-input" name="squareFootage" value={listing.squareFootage} onChange={(e) => handleInputChange(e, 5)} required /></p>
                </div>
                <div className="form-description"></div>
                <p>Description: <textarea name="description" className="custom-input" rows="4" value={listing.description} onChange={(e) => handleInputChange(e, 6)} required></textarea></p>
                <div children="form-photos">
                    <p>Image Links:</p>
                    {listing.imageLinks.map((link, index) => (
                        <input
                            key={index}
                            type="text"
                            className="custom-input"
                            value={link}
                            onChange={(e) => handleInputChange(e, index)}
                            placeholder={`Image ${index + 1} Link`}
                        />
                    ))}
                </div>
                <button className='btn' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ListingForm;
