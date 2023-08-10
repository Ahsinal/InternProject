import React from 'react'
import './Sidenav.css'
import { Link } from 'react-router-dom'
const Sidenav = () => {
  const navItems = [
    { title: "Women's Fashion", routeto: "/" }, { title: "Men's Fashion", routeto: "/" }, { title: "Electronic", routeto: "/" },
    { title: "Home & Lifestyle", routeto: "/" }, { title: "Medicine", routeto: "/" }, { title: "Sports & Outdoor", routeto: "/" },
    { title: "Home Luxuries", routeto: "/" }, { title: "Baby's & Toys" }, { title: " Home Groceries" }, { title: "Pet Groceries" },
    { title: "Health Diets" }, { title: "Beauty Products" }
  ];
  return (
    <nav>
      <ul>
        {
          navItems.map((item, index) => (
            <Link to={item.routeto} key={index}>
              <li>{item.title}</li>
            </Link>
          ))
        }
        {/*
        <Link to='/'><li >{navItems.title}</li></Link> 
        <Link to='/'><li>Men's Fashion</li></Link>
        <Link to='/'><li>Electronic</li></Link>
        <Link to='/'><li>Home & Lifestyle</li></Link>
        <Link to='/'><li >Medicine</li></Link>
        <Link to='/'><li>Sports & Outdoor</li></Link>
        <Link to='/'><li>Baby's & Toys</li></Link>
        <Link to='/'><li>Groceries & Pet</li></Link>
        <Link to='/'><li>Health & Beauty</li></Link> */}
      </ul>
    </nav>
  )
}

export default Sidenav