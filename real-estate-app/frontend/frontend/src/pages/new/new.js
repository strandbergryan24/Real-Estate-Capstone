import React, { useState } from 'react';

const ListingForm = () => {
    const [listing, setListing] = useState({
        address: '',
        propertyType: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        squareFootage: '',
        description: '',
        images: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setListing({ ...listing, [name]: value });
    };

    const handleImageChange = (e) => {
        const imagesArray = Array.from(e.target.files);
        setListing({ ...listing, images: imagesArray });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div>
            <h1>Listing Form</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <p>Address: <input type="text" name="address" value={listing.address} onChange={handleInputChange} required /></p>
                <p>Property Type:</p>
                <label><input type="radio" name="propertyType" value="RENT" checked={listing.propertyType === 'RENT'} onChange={handleInputChange} required /> Rent</label>
                <label><input type="radio" name="propertyType" value="SALE" checked={listing.propertyType === 'SALE'} onChange={handleInputChange} required /> Sale</label>
                <p>Price ($): <input type="number" name="price" value={listing.price} onChange={handleInputChange} required /></p>
                <p>Bedrooms: <input type="number" name="bedrooms" value={listing.bedrooms} onChange={handleInputChange} required /></p>
                <p>Bathrooms: <input type="number" name="bathrooms" value={listing.bathrooms} onChange={handleInputChange} required /></p>
                <p>Square Footage: <input type="text" name="squareFootage" value={listing.squareFootage} onChange={handleInputChange} required /></p>
                <p>Description:</p>
                <textarea name="description" rows="4" value={listing.description} onChange={handleInputChange} required></textarea>
                <div>
                    <p>Images:</p>
                    <input type="file" name="images" accept="image/*" onChange={handleImageChange} multiple required />
                    {listing.images.length > 0 && (
                        <div>
                            {listing.images.map((image, index) => (
                                <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px' }} />
                            ))}
                        </div>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ListingForm;
