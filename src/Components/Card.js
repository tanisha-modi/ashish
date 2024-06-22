import React from 'react'
import cardImg from "../images/rect.png"
import AIImg from "../images/AI.png"
import "./Card.css"

function Card() {
    return (
        <div className='card-container'>

            <div className='img-container'>
                <div className='card'>
                    <img src={AIImg} className='AI-img' alt=''></img>
                    <h5>AI Based</h5>
                </div>
            </div>
            <div className='container'>
                <div className='card'>
                    <img src={AIImg} className='AI-img' alt=''></img>
                    <h5>AI Based</h5>
                </div>
            </div>
            <div className='img-container'>
                <div className='card'>
                    <img src={AIImg} className='AI-img' alt=''></img>
                    <h5>AI Based</h5>
                </div>
            </div>
        </div>
    )
}

export default Card
