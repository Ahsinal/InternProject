import React from "react";
import "./About.css";
import "./About.css";
import{BsFillHouseFill,BsFillBagCheckFill} from 'react-icons/bs'
import{AiFillDollarCircle,AiOutlineTwitter,AiFillInstagram,AiFillLinkedin} from'react-icons/ai'
import { FaShuttleVan, FaHeadphones ,FaCoins} from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import BreadcrumbComponent from "../../Components/BreadcrumbComponent";
const About = () => {
  //Breadcrumbs paths
  const paths = [{ name: "About", link: "/about" }];
  return (
    <section className="about__page">
      <BreadcrumbComponent paths={paths} />
      <div className="about__content">
        <div className="about__content__division about__desc">
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
          <p>
            Exclusive boasts an extensive and ever-expanding catalog, surpassing
            the remarkable milestone of over one million diverse products. .
          </p>
        </div>
        <div className="about__content__division about__pic">
          <img
            src="https://img.freepik.com/free-photo/planner-calendar-schedule-date-concept_53876-121073.jpg?size=626&ext=jpg"
            alt="about pic"
          />
        </div>
      </div>

      <div className="about__stat__cards">
        <div className="stat__card">
          <div className="outer__circle">
            <div className="inner__circle">
              <BsFillHouseFill className="inner-icon" />
            </div>
          </div>
          <h4>10.5K</h4>
          <p>Active Sellers </p>
        </div>
        
        <div className="stat__card">
          <div className="outer__circle">
            <div className="inner__circle">
              <AiFillDollarCircle className="inner-icon" />
            </div>
          </div>
          <h4>33K</h4>
          <p>Monthly Product Sale </p>
        </div>

        <div className="stat__card">
          <div className="outer__circle">
            <div className="inner__circle">
              <BsFillBagCheckFill className="inner-icon" />
            </div>
          </div>
          <h4>45.5K</h4>
          <p>Active Customers </p>
        </div>

        <div className="stat__card">
          <div className="outer__circle">
            <div className="inner__circle">
              <FaCoins className="inner-icon" />
            </div>
          </div>
          <h4>25K</h4>
          <p>Annual Gross Sale </p>
        </div>
      </div>
       {/* ##################aboutus cards############################### */}
       <section className="aboutus__cards">
        <div className="about__us__peronal__card">
          <div className="card__image">
            <img src="https://img.freepik.com/free-photo/portrait-smiling-handsome-man-eyeglasses_171337-4853.jpg?size=626&ext=jpg" alt="teams" />
          </div>
          <div className="card__desc">
            <h4>Tom Cruise</h4>
            <p>Founder and CEO</p>
            <div className="card__icons">
              <AiOutlineTwitter />
              <AiFillInstagram/>
              <AiFillLinkedin/>
            </div>
          </div>
        </div>

        <div className="about__us__peronal__card">
          <div className="card__image">
            <img src="https://img.freepik.com/free-photo/front-view-beautiful-young-woman_74855-4243.jpg?size=626&ext=jpg" alt="teams" />
          </div>
          <div className="card__desc">
            <h4>Emma Watson</h4>
            <p>Founder and CEO</p>
            <div className="card__icons">
              <AiOutlineTwitter />
              <AiFillInstagram/>
              <AiFillLinkedin/>
            </div>
          </div>
        </div>

        <div className="about__us__peronal__card">
          <div className="card__image">
            <img src="https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18665.jpg?size=626&ext=jpg" alt="teams" />
          </div>
          <div className="card__desc">
            <h4>Will Smith</h4>
            <p>Founder and CEO</p>
            <div className="card__icons">
              <AiOutlineTwitter />
              <AiFillInstagram/>
              <AiFillLinkedin/>
            </div>
          </div>
        </div>
        
       </section>

      {/* ################################################# */}
      <div className="newarrival__footer">
        <div className="newarrival__footer__div__content">
          <div className="outer__circle">
            <div className="inner__circle">
              <FaShuttleVan className="inner-icon" />
            </div>
          </div>
          <h4>Fast And Free Delivery</h4>
          <p>Free delivery for all product above $140</p>
        </div>

        <div className="newarrival__footer__div__content">
          <div className="outer__circle">
            <div className="inner__circle">
              <FaHeadphones className="inner-icon" />
            </div>
          </div>
          <h4>24/7 Customer Service</h4>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className="newarrival__footer__div__content">
          <div className="outer__circle">
            <div className="inner__circle">
              <RiSecurePaymentLine className="inner-icon" />
            </div>
          </div>
          <h4>Money Back Guarantee</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default About;
