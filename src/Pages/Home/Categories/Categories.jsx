import React, { useState } from "react";
import "./Categories.css";
import HeadingIntro from "../../../Components/Headings/HeadingIntro";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { BiSolidWatchAlt, BiCamera, BiHeadphone } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import Card from "../../../Components/Card/Card";
import { Next, Prev } from "react-bootstrap/esm/PageItem";
const Categories = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  //datas
  const categoriesData = [
    { icon: MdPhoneIphone,title: "Phones"},{ icon: RiComputerLine, title: "Computers"},
    { icon: BiSolidWatchAlt, title: "SmartWatch"},{ icon: BiCamera,title: "Camera"},
    { icon: BiHeadphone, title: "Headphones"},{ icon: FaGamepad, title: "Gaming"},

    { icon: MdPhoneIphone,title: "Phone"},
    { icon: RiComputerLine, title: "Computers"},
    { icon: BiSolidWatchAlt, title: "SmartWatch"},
    { icon: BiCamera,title: "Camera"},
    { icon: BiHeadphone, title: "Headphones"},
    { icon: FaGamepad, title: "Gaming"}
   
  ];

  //usestate
  const[currentSlide,setCurrentSlide]=useState(0);

  const handleSlideChange =(direction)=>{
    if (direction==='prev'){setCurrentSlide((currentSlide-1 +categoriesData.length)%categoriesData.length);}
    else if(direction==="next"){setCurrentSlide((currentSlide+1)%categoriesData.length);}
  };
  return (
    <>
      <HeadingIntro label="Categories" />
      <div className="section_header">
        <h3>Browse By Category</h3>
        <div className="arrows">
          {/* <BsFillArrowLeftCircleFill 
          className="custom-arrow" 
          onClick={()=>{ 
            handleSlideChange("prev")
        }}
          />
          <BsFillArrowRightCircleFill 
          className="custom-arrow" 
          onClick={()=>{
            handleSlideChange("next")
            }}/> */}
        </div>
      </div>
      <div className="categories__card__section">
        <div className="Carousel__container">
          <Carousel
            responsive={responsive}
            slidesToSlide={1}
            showDots={false}
            // arrows={false}
            // autoPlay={true}
            // autoPlaySpeed={1000}
            // infinite={true}
            customTransition="transform 300ms ease-in-out"
            activeIndex={currentSlide}
          >
            {categoriesData.map((category, index) => (
              <div className="categories__card" key={index}>
                {React.createElement(category.icon, {
                  className: "category__icon",
                })}
                <h5>{category.title}</h5>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Categories;
