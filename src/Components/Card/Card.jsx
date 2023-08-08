import React from 'react'
import { BsFillBagHeartFill } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai"
import './Card.css'
const Card = (props) => {
  return (
    <div className="card__container">
      <section className="card">
        <img src={props.url}
          alt={props.alt}
          className='card-img' />

        <div className="card-details">
          <h3 className="card-title">
            {props.cardTitle}
          </h3>
          <section className="card-reviews">
            <AiFillStar className='rating-star' /><AiFillStar className='rating-star' />
            <AiFillStar className='rating-star' />
            <span className="total-reviews">({props.TotalReview})</span>
          </section>

          <section className="card-price">
            <div className="price">
              <del> {props.PrevPrice}</del>{props.NewPrice}
            </div>
            <div className="bag-icon">
              <BsFillBagHeartFill />
            </div>
          </section>
        </div>
      </section>
    </div>

  )
}

export default Card