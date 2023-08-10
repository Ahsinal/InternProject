import React from "react";
import "./WishList.css";
import Card from "../../Components/Card/Card";
import HeaderIntro from "../../Components/Headings/HeadingIntro";
const WishList = () => {
  let WishlistData = [
    {
      url: "https://img.freepik.com/premium-photo/video-game-controller-gamepad-isolated-white_263357-317.jpg?size=626&ext=jpg",
      alt: "Gamepad",
      cardTitle: "HAVIT HV-G92",
      TotalReview: "4",
      PrevPrice: "$350",
      NewPrice: "290",
      Discount: "-40%"
    },
    {
      url: "https://img.freepik.com/premium-photo/gaming-keyboard-with-cacklight_666369-47.jpg?size=626&ext=jpg",
      alt: "Keyboard",
      cardTitle: "Keyboard",
      TotalReview: "4",
      PrevPrice: "$300",
      NewPrice: "200",
      New: "New",
    },
    {
      url: "https://img.freepik.com/free-photo/purple-computer-mouse_1260-12.jpg?size=626&ext=jpg",
      alt: "Gaming Mouse",
      cardTitle: "Gaming Mouse",
      TotalReview: "4",
      PrevPrice: "$200",
      NewPrice: "100",
    },
    {
      url: "https://img.freepik.com/free-photo/still-life-seat-gamers_23-2149746561.jpg?size=626&ext=jpg",
      alt: "Gaming Chair",
      cardTitle: "Gaming Chair",
      TotalReview: "4",
      PrevPrice: "$1300",
      NewPrice: "1200",
      New: "New",
    }, {
        url: "https://img.freepik.com/free-photo/still-life-seat-gamers_23-2149746561.jpg?size=626&ext=jpg",
        alt: "Gaming Chair",
        cardTitle: "Gaming Chair",
        TotalReview: "4",
        PrevPrice: "$1300",
        NewPrice: "1200",
        New: "New",
      }
  ];

  let ForUData = [
    {
      url: "https://img.freepik.com/free-photo/purple-computer-mouse_1260-12.jpg?size=626&ext=jpg",
      alt: "Gaming Mouse",
      cardTitle: "Gaming Mouse",
      TotalReview: "4",
      PrevPrice: "$200",
      NewPrice: "100",
    },
    {
      url: "https://img.freepik.com/free-photo/still-life-seat-gamers_23-2149746561.jpg?size=626&ext=jpg",
      alt: "Gaming Chair",
      cardTitle: "Gaming Chair",
      TotalReview: "4",
      PrevPrice: "$1300",
      NewPrice: "1200",
      New: "New",
    },
  ];
  //total wishlist datas
  const totalWishlistItems=WishlistData.length;
  //Delete Action
  const deleteAction =()=>{
    alert("delete action")
  }
  return (
    <section className="wishlist__page">
      <div className="wishlist__section">
        <h5>Wishlist ({totalWishlistItems})</h5>
        <div className="wishlist__button">
          <button>Move All To Bag</button>
        </div>
      </div>

      <div className="wishlist__cards">
        {WishlistData.map((cardData, index) => (
          <Card
            key={index}
            url={cardData.url}
            alt={cardData.alt}
            cardTitle={cardData.cardTitle}
            TotalReview={cardData.TotalReview}
            PrevPrice={cardData.PrevPrice}
            NewPrice={cardData.NewPrice}
            Discount={cardData.Discount}
            New={cardData.New}
            delete__action={()=>deleteAction()}
          />
        ))}
      </div>

      <div className="just__for__you__section">
        <HeaderIntro label="Just For You" />
        <div className="wishlist__button">
          <button>See All</button>
        </div>
      </div>
      <div className="wishlist__cards">
        {ForUData.map((cardData, index) => (
          <Card
            key={index}
            url={cardData.url}
            alt={cardData.alt}
            cardTitle={cardData.cardTitle}
            TotalReview={cardData.TotalReview}
            PrevPrice={cardData.PrevPrice}
            NewPrice={cardData.NewPrice}
            Discount={cardData.Discount}
            New={cardData.New}
            view__action={true}
            wishlist__action={true}
          />
        ))}
      </div>
    </section>
  );
};

export default WishList;
