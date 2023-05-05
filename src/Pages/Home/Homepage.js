import React from 'react' 
import './Homepage.scss' 
import Product from '../Product/Product' 
import {Link } from 'react-router-dom' 

function Homepage() {
    return (
        <>
            <div className='background'>
                <div className='background_container'>
                    <div className='background_intro'>
                        <p className='br_subtitle'>Trending Item</p>
                        <h2 className='br_title'>WOMEN'S LATEST FASHION SALE</h2>
                        <p className='br_content'>starting at $ <strong>20</strong>.00</p>
                        <Link className='br-button' to="/product" >SHOP NOW</Link>
                    </div>
                </div>

            </div>
            <Product></Product>
        </>
    ) 
}

export default Homepage 