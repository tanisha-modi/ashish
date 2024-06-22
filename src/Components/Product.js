import React from 'react'
import blackBox from "../images/black_box.png"
import "./Product.css"


function Product() {
    return (
        <>
            <div id='product' className='product-container'>
                <div className='line-container'>
                    <h3 className='our-product'>OUR PRODUCT</h3>
                    <h1 className='head-line'>BLACK BOX</h1>
                    <div className='tag-line'>AI & Video Analytics</div>
                    <div className='desc'>The BlackBox is an AI-powered video analytics device that processes multiple IP camera inputs to provide intelligent detection, tracking, recognition and behavior analysis capabilities with smart event triggering and false alarm reduction.</div>
                </div>
                <div className='black-box-container'>
                    <img src={blackBox} className='black-box' alt=''></img>
                </div>
            </div>
        </>
    )
}

export default Product
