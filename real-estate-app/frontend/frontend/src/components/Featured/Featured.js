import React from 'react'
import Apt1 from '../../assets/apt1.jpg'
import Apt2 from '../../assets/apt2.jpg'
import Apt3 from '../../assets/apt3.jpg'
import './Featured.css'


const Featured = () => {
  return (
    <div className='featured'>
        <h1 className='featured-text'>Top featured Listings</h1>
        <p>Selected listing by City, State, & Zip based on views</p>
        <div className='container'>
            <img src={Apt1} alt='' />
            <img src={Apt2} alt='' />
            <img src={Apt3} alt='' />
            <img src={Apt3} alt='' />
            <img src={Apt2} alt='' />
            <div className='span-3 img-details'>
                <h2>NEEDS AN API CALL TO BACKEND(Address)</h2>
                <p>House For Sale</p>
                <p className='Price'>NEEDS AN API CALL(price)</p>
            </div>
            <div className='info-grid'>
                <div>
                    <div className='info'>
                        <p className='bold'>API CALL(bedrooms)</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>API CALL(bathrooms)</p>
                    </div>
                </div>
                <div>
                    <div className='info'>
                        <p className='bold'>API CALL(sq feet)</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>API CALL(estimated pay)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured