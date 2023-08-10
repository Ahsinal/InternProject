import React from 'react'
import ImgBanner from './BannerImg.png'
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner">
        <div className="banner__text__area">
            <h6>Categories</h6>
            <h3>Enhance Your <br/>
            Music Experience
            </h3>

            <div className="time" >
                <div className="circle">
                    <strong>23</strong>
                    <p>Hours</p>
                </div>
                <div className="circle">
                    <strong>5</strong>
                    <p>Days</p>
                </div>
                <div className="circle">
                    <strong>50</strong>
                    <p>Minutes</p>
                </div>
                <div className="circle">
                    <strong>35</strong>
                    <p>Seconds</p>
                </div>
            </div>

            <div className="button_banner">
                <button>Buy Now</button>
            </div>
        </div>


        <div className="banner__image__section">
            <img src={ImgBanner} alt="" />
        </div>
    </div>
  )
}

export default Banner