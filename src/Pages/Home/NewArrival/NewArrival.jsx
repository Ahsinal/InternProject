import React from "react";
import "./NewArrival.css";
import{FaShuttleVan,FaHeadphones} from 'react-icons/fa'
import{RiSecurePaymentLine} from 'react-icons/ri'
import HeadingIntro from "../../../Components/Headings/HeadingIntro";
import Gallery from "./Gallery/Gallery";
const NewArrival = () => {
  return (
    <>
      <HeadingIntro label="Featured" />
      <div className="section_header">
        <h3>New Arrival</h3>
      </div>
      <Gallery  />
      <div className="newarrival__footer">
        <div className="newarrival__footer__div__content">
          <div className="outer__circle">
            <div className="inner__circle">
              <FaShuttleVan className="inner-icon"/>
            </div>
          </div>
          <h4>Fast And Free Delivery</h4>
          <p>Free delivery for all product above $140</p>
        </div>

        <div className="newarrival__footer__div__content">
        <div className="outer__circle">
            <div className="inner__circle">
              <FaHeadphones className="inner-icon"/>
            </div>
          </div>
          <h4>24/7 Customer Service</h4>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className="newarrival__footer__div__content">
        <div className="outer__circle">
            <div className="inner__circle">
              <RiSecurePaymentLine className="inner-icon"/>
            </div>
          </div>
          <h4>Money Back Guarantee</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>

    </>
  );
};

export default NewArrival;
