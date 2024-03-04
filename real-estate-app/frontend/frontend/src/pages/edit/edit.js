import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditListing = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const url = 'http://localhost:4000/'
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
    const fetchListing = async () => {
      try {
        const response = await fetch(url + `listings`,);
        const data = await response.json();
        setListing(data);
        setFormData(data);
      } catch (error) {
        console.error('Error fetching listing:', error);
      }
    };

    fetchListing();
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePropertyTypeChange = (e) => {
    setListing({ ...listing, propertyType: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(url + `listings/${id}`,);
        const requestOptions = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        };
        const response = await fetch(url + `listings/${id}`, requestOptions);

        if (!response.ok) {
          throw new Error('Failed to update listing');
        }
    } catch (error) {
      console.error('Error updating listing:', error);
    }
  };

  return (
    <div className="listing-form-container">
    <h1>Edit Listing</h1>
    {listing && (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <p>Address: <input type="text" className="custom-input" name="address" value={formData.address} onChange={(e) => handleInputChange(e, 0)} required /></p>
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
            {listing && listing.images && listing.images.map((link, index) => (
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
    )}
</div>
  );
};

export default EditListing;
