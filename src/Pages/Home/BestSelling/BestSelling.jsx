import React from "react";
import "./BestSelling.css";
import HeadingIntro from "../../../Components/Headings/HeadingIntro";
import CustomButton from "../../../Components/Buttons/CustomButton";
import Card from "../../../Components/Card/Card";
const BestSelling = () => {
  const BestSellingData = [
    {
      url: "https://img.freepik.com/free-photo/white-denim-jacket-front-view-streetwear-fashion_53876-106035.jpg?size=626&ext=jpg",
      alt: "The north coat",
      cardTitle: "The North Coat",
      TotalReview: "45",
      PrevPrice: "$360",
      NewPrice: "290",
    },
    {
      url: "https://img.freepik.com/premium-photo/sophisticated-english-plaid-luxury-women-handbag-blurry-background_124507-29831.jpg?size=626&ext=jpg",
      alt: "Bag",
      cardTitle: "Gucci Bag",
      TotalReview: "45",
      PrevPrice: "$360",
      NewPrice: "290",
    },
    {
      url: "https://img.freepik.com/premium-photo/boots-wooden-floor_1205-70.jpg?size=626&ext=jpg",
      alt: "The Boot",
      cardTitle: "Boot",
      TotalReview: "45",
      PrevPrice: "$360",
      NewPrice: "290",
    },
    {
      url: "https://img.freepik.com/premium-photo/isolated-white-background-beige-leather-womens-handbag_410516-9214.jpg?size=626&ext=jpg",
      alt: "Bag",
      cardTitle: "Loise Vitton",
      TotalReview: "45",
      PrevPrice: "$360",
      NewPrice: "290",
    }
  ];
  return (
    <>
      <HeadingIntro label="This Month" />
      <div className="section_header">
        <h3>Best Selling Products</h3>
        <CustomButton label="View All" />
      </div>
      <div className="best__selling__card__container">
          {
            BestSellingData.map((cardData,index)=>(
              <Card key={index}
              url={cardData.url}
              alt={cardData.alt}
              cardTitle={cardData.cardTitle}
              TotalReview={cardData.TotalReview}
              PrevPrice={cardData.PrevPrice}
              NewPrice={cardData.PrevPrice}
              wishlist__action={true}
              view__action={true}
              />
            ))
          }
        </div>
    </>
  );
};

export default BestSelling;
