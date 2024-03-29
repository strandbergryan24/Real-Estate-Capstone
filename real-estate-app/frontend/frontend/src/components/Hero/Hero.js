import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'

const Hero = () => {
  const [selectedOption, setSelectedOption] = useState('buy');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='hero'>
      <div className='content'>
        <h1>Find the Perfect Home</h1>
        <p className='search-text'>Discover your dream home with us. Whether you're searching for a cozy apartment in the heart of the city, a spacious family house in the suburbs, or a luxurious waterfront property, we're here to help you find the perfect place to call home</p>
        <form className='search'>
          <div>
            <input type='text' placeholder='Enter Keyword' />
          </div>
          <div className='radio'>
            <input type='radio' value='buy' checked={selectedOption === 'buy'} onChange={handleOptionChange} />
            <label>Buy</label>
            <input type='radio' value='rent' checked={selectedOption === 'rent'} onChange={handleOptionChange} />
            <label>Rent</label>
            <button type='submit'><AiOutlineSearch className='icon' /></button>
          </div>
        </form>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Hero
