import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditListing = () => {
  const { id } = useParams();
  const [listing, setListing] = useState({
    address: '',
    images: ['', '', '', '', ''],
    propertyType: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    description: '',
  });
  const url = 'http://localhost:4000/';

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(url + `listings/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch listing');
        }
        const fetchedData = await response.json();
        console.log('Fetched Listing:', fetchedData);
        setListing(fetchedData);
      } catch (error) {
        console.error('Error fetching listing:', error);
      }
    };

    fetchListing();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(url + `listings/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(listing)
      });
    } catch (error) {
      console.error('Error updating listing:', error);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setListing({ ...listing, [name]: value });
  };

  const handlePropertyTypeChange = (e) => {
    setListing({ ...listing, propertyType: e.target.value });
  };

  return (
    <div className="listing-form-container">
      <h1>Edit Listing</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <span>Address: <input type="text" className="custom-input" name="address" value={listing.address} onChange={handleInputChange} required /></span>
        </div>
        <div className="form-radio">
          <span>Property Type:  </span>
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
          <span>Price: <input type="number" className="custom-input" name="price" value={listing.price} onChange={handleInputChange} required /></span>
        </div>
        <div className="form-group">
          <span>Bedrooms: <input type="number" className="custom-input" name="bedrooms" value={listing.bedrooms} onChange={handleInputChange} required /></span>
        </div>
        <div className="form-group">
          <span>Bathrooms: <input type="number" className="custom-input" name="bathrooms" value={listing.bathrooms} onChange={handleInputChange} required /></span>
        </div>
        <div className="form-group">
          <span>Square Footage: <input type="text" className="custom-input" name="squareFootage" value={listing.squareFootage} onChange={handleInputChange} required /></span>
        </div>
        <div className="form-description"></div>
        <span>Description: <textarea name="description" className="custom-input" rows="4" value={listing.description} onChange={handleInputChange} required></textarea></span>
        <div children="form-photos">
            <span>Image Links:</span>
            {listing.images && listing.images.map((link, index) => (
                <input
                    key={index}
                    type="text"
                    className="custom-input"
                    name={`images[${index}]`}
                    value={link}
                    onChange={(e) => handleInputChange(e, index)}
                    placeholder={`Image ${index + 1} Link`}
                />
            ))}
        </div>
        <button className='btn' type="submit" style={{ display: 'block', margin: '0 auto', marginTop: "10px" }}>Submit</button>
      </form>
    </div>
  );
};

export default EditListing;
