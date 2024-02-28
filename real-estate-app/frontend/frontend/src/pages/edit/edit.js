import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditListing = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [formData, setFormData] = useState({
    address: '',
    images: [],
    propertyType: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    description: '',
  });

  useEffect(() => {
    // Fetch the listing data based on the ID from the server
    axios.get(`/api/listings/${id}`)
      .then(response => {
        setListing(response.data);
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching listing:', error);
      });
  }, [id]);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Submit the updated listing data to the server
    axios.put(`/api/listings/${id}`, formData)
      .then(response => {
        console.log('Listing updated successfully:', response.data);
        // Optionally, redirect to the updated listing page or another page
      })
      .catch(error => {
        console.error('Error updating listing:', error);
      });
  };

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Listing</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields for editing listing details */}
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
        {/* Add input fields for other listing details (images, propertyType, price, etc.) */}
        <label>Property Type:</label>
        <input type="text" name="propertyType" value={formData.propertyType} onChange={handleChange} />
        <label>Price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} />
        <label>Bedrooms:</label>
        <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
        <label>Bathrooms:</label>
        <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
        <label>Square Footage:</label>
        <input type="text" name="squareFootage" value={formData.squareFootage} onChange={handleChange} />
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />

        <button type="submit">Submit Changes</button>
      </form>

      {/* Display the current listing details */}
      <div>
        <h2>Current Listing Details</h2>
        <p>Address: {listing.address}</p>
        <p>Property Type: {listing.propertyType}</p>
        <p>Price: {listing.price}</p>
        <p>Bedrooms: {listing.bedrooms}</p>
        <p>Bathrooms: {listing.bathrooms}</p>
        <p>Square Footage: {listing.squareFootage}</p>
        <p>Description: {listing.description}</p>
      </div>
    </div>
  );
};

export default EditListing;
