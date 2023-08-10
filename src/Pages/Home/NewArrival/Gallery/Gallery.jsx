import React from 'react'
import './Gallery.css'
import { Link } from 'react-router-dom'
const Gallery = () => {
  return (
    <div className="gallery__section">
      <div className="half__div first__div">
        <div className="text__section">
          <h5>Play Station 5</h5>
          <p>Black and version of PS5<br/>coming soon!!</p>
          <Link>Shop Now</Link>
        </div>
      </div>

      <div className="half__div  second__div">
        <div className="div__flat div__upper">
        <div className="text__section">
          <h5>American Diamond </h5>
          <p>Adyu3<br/>coming soon!!</p>
          <Link>Shop Now</Link>
        </div>
        </div>
        <div className="div__flat  div__lower">
          <div className="small__div small__div__a">
          <div className="text__section">
          <h5>Gucci Perfume </h5>
          <p>Adyu3</p>
          <Link>Shop Now</Link>
        </div>

          </div>
          <div className="small__div small__div__b">
          <div className="text__section">
          <h5>Cream </h5>
          <p>Adyu3</p>
          <Link>Shop Now</Link>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery