import React from 'react'
import { BsFillBagHeartFill } from "react-icons/bs"
import { AiFillStar,AiOutlineHeart,AiOutlineEye } from "react-icons/ai"
import './Card.css'
const Card = (props) => {
  return (
    <div className="card__container">
      <section className="card">
        {
          props.Discount &&     <div className="discount">
          {props.Discount}
        </div>
        }
    
        <div className="icons">
          <div className="icon__circle">
            <AiOutlineHeart/>
          </div>
          <div className="icon__circle">
            <AiOutlineEye/>
          </div>
        </div>
        <div className="card__image">
        <img src={props.url}
          alt={props.alt} />
        </div>

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