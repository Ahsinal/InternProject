import React from 'react'
import './Navbrand.css'
import { Link } from 'react-router-dom'
const Navbrand = () => {
  return (
   <div className="navbrand">
    <p className='m-0'>Summer Sale for All Swim Suits And Free Express Delivery - OFF 50%!
        <Link to="#">ShopNow</Link>
    </p>
   </div>
  )
}

export default Navbrand