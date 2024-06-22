import React from 'react'
import Product from "./Product"
import Nav from "./Nav"
import Card from "./Card"
import "./Main.css"
import About from './About'

function Main() {
  return (
    <div className='main-container'>
         <Nav/>
         <Product/>
         <Card/>
         <About/>
    </div>
  )
}

export default Main
