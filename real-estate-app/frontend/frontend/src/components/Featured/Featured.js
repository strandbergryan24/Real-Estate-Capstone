import React from 'react'
import Apt1 from '../../assets/apt1.jpg'
import Apt2 from '../../assets/apt2.jpg'
import Apt3 from '../../assets/apt3.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>API CALL FOR ADDRESS</h1>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt3} alt='' />
                <img src={Apt3} alt='' />
                <img src={Apt2} alt='' />
                <div className='img-details span-5 info-grid'>
                    <div className='info'>
                        <p>HOME FOR SALE</p>
                    </div>
                    <div className='info'>
                        <p>PRICE:700,000</p>
                    </div>
                    <div className='info'>
                        <p>Number of Bedrooms: 5</p>
                    </div>
                    <div className='info'>
                        <p>Number of bathrooms: 7</p>
                    </div>
                    <div className='info'>
                        <p>Square Footage: 7,400ft</p>
                    </div>
                    <div className='span-5 discription'>
                        <p>API CALL FOR DESCRIPTION AND INFORMATION: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id leo in velit pretium accumsan vel nec mauris. Suspendisse potenti. Nulla facilisi. Duis interdum eleifend nisl, vel eleifend purus consequat id. Sed auctor ante eu felis condimentum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; </p>
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
