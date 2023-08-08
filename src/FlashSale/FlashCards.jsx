import React from 'react'
import Card from '../Components/Card/Card'
// import './FlashCards.css'
const FlashCards = () => {
    const FlashCardDatas=[
        {
            url:"https://img.freepik.com/premium-photo/video-game-controller-gamepad-isolated-white_263357-317.jpg?size=626&ext=jpg",
            alt:"Gamepad",
            cardTitle:"HAVIT HV-G92",
            TotalReview:'4',
            PrevPrice:'$350',
            NewPrice:"290"
        },
        {
            url:"https://img.freepik.com/premium-photo/gaming-keyboard-with-cacklight_666369-47.jpg?size=626&ext=jpg",
            alt:"Keyboard",
            cardTitle:"Keyboard",
            TotalReview:'4',
            PrevPrice:'$300',
            NewPrice:"200"
        },
        {
            url:"https://img.freepik.com/free-photo/purple-computer-mouse_1260-12.jpg?size=626&ext=jpg",
            alt:"Gaming Mouse",
            cardTitle:"Gaming Mouse",
            TotalReview:'4',
            PrevPrice:'$200',
            NewPrice:"100"
        },
        {
            url:"https://img.freepik.com/free-photo/still-life-seat-gamers_23-2149746561.jpg?size=626&ext=jpg",
            alt:"Gaming Chair",
            cardTitle:"Gaming Chair",
            TotalReview:'4',
            PrevPrice:'$1300',
            NewPrice:"1200"
        }
    ];
  return (
    <div className='card__container'>
      {
        FlashCardDatas.map((cardData,index)=>(
            <Card key={index} url={cardData.url} 
            alt={cardData.alt}
            cardTitle={cardData.cardTitle}
            TotalReview={cardData.TotalReview}
            PrevPrice={cardData.PrevPrice}
            NewPrice={cardData.NewPrice}
            />
        ))
      }
    </div>
  )
}

export default FlashCards