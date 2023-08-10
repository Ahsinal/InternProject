import React, { useState } from "react";
import "./WishList.css";
import Card from "../../Components/Card/Card";
import HeaderIntro from "../../Components/Headings/HeadingIntro";
import { Modal, Button } from "react-bootstrap";
const WishList = () => {
  const [WishlistData,setWishlistData ]= useState(
    [
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
    ]
  )

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
  //Delete Action in wishlist
  const[showModal,setShowModel]=useState(false);
  const[selectedItem,setSelectedItem]=useState(null);
  const deleteAction =(index)=>{
    setSelectedItem(index);
    setShowModel(true);
  };
  const confirmDelete=()=>{
    if(selectedItem !==null){
      const updatedWishlist=WishlistData.filter((_,index)=>
      index!==selectedItem);
      setSelectedItem(null);
      setShowModel(false);
      setWishlistData(updatedWishlist);
    }
  };
  const closeModel =()=>{
    setSelectedItem(null);
    setShowModel(false);
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
            delete__action={()=>deleteAction(index)}
          />
        ))}
      </div>
      <Modal show={showModal} onHide={closeModel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>


      {/* ./..............just for you section................../ */}

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
