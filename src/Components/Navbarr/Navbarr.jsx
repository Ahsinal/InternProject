import React from 'react'
import './Navbarr.css'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import {AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai'
const Navbarr = () => {
  return (
    <section className='navbar__main'>
      <div className="navbar__section">
        <div className="logo">Exclusive</div>

        <div className="nav__items  ">
          <ul>
            <Link to='/'><li >Home</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/signup'><li>Sign Up</li></Link>
          </ul>
        </div>
        <div className="nav__elements">
          <div className="nav__searchbox">
            <input type="text" className='search-input' placeholder='What are you looking for?' />
            <span><BiSearch /></span>
          </div>
          <div className="nav__icons">
            <Link to='/wishlist'><AiOutlineHeart/></Link>
          </div>
          <div className="nav__icons">
            <Link to='/cart'><AiOutlineShoppingCart/></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbarr