import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../Components/Card/Card';
import './Carasoule.css'
const Carasoule = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const FlashCarasouleDatas = [
        {
            url: "https://img.freepik.com/premium-photo/video-game-controller-gamepad-isolated-white_263357-317.jpg?size=626&ext=jpg",
            alt: "Gamepad",
            cardTitle: "HAVIT HV-G92",
            TotalReview: '4',
            PrevPrice: '$350',
            NewPrice: "290"
        },
        {
            url: "https://img.freepik.com/premium-photo/gaming-keyboard-with-cacklight_666369-47.jpg?size=626&ext=jpg",
            alt: "Keyboard",
            cardTitle: "Keyboard",
            TotalReview: '4',
            PrevPrice: '$300',
            NewPrice: "200"
        },
        {
            url: "https://img.freepik.com/free-photo/purple-computer-mouse_1260-12.jpg?size=626&ext=jpg",
            alt: "Gaming Mouse",
            cardTitle: "Gaming Mouse",
            TotalReview: '4',
            PrevPrice: '$200',
            NewPrice: "100"
        },
        {
            url: "https://img.freepik.com/free-photo/still-life-seat-gamers_23-2149746561.jpg?size=626&ext=jpg",
            alt: "Gaming Chair",
            cardTitle: "Gaming Chair",
            TotalReview: '4',
            PrevPrice: '$1300',
            NewPrice: "1200"
        },
        {
            url: "https://img.freepik.com/free-photo/still-life-seat-gamers_23-2149746561.jpg?size=626&ext=jpg",
            alt: "Gaming Chair",
            cardTitle: "Gaming Chair",
            TotalReview: '4',
            PrevPrice: '$1300',
            NewPrice: "1200"
        },
        {
            url: "https://img.freepik.com/free-photo/still-life-seat-gamers_23-2149746561.jpg?size=626&ext=jpg",
            alt: "Gaming Chair",
            cardTitle: "Gaming Chair",
            TotalReview: '4',
            PrevPrice: '$1300',
            NewPrice: "1200"
        },
        {
            url: "https://img.freepik.com/free-photo/still-life-seat-gamers_23-2149746561.jpg?size=626&ext=jpg",
            alt: "Gaming Chair",
            cardTitle: "Gaming Chair",
            TotalReview: '4',
            PrevPrice: '$1300',
            NewPrice: "1200"
        }
    ];
    return (
        <div className='Carousel__container'>
            <Carousel
                responsive={responsive}
                slidesToSlide={1}
                showDots={false}
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={1000}
                infinite={true}
                customTransition="transform 300ms ease-in-out" 
            >
                {
                    FlashCarasouleDatas.map((cardData, index) => (
                        <Card
                            className='card'
                            key={index}
                            url={cardData.url}
                            alt={cardData.alt}
                            cardTitle={cardData.cardTitle}
                            TotalReview={cardData.TotalReview}
                            PrevPrice={cardData.PrevPrice}
                            NewPrice={cardData.PrevPrice}
                        />
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Carasoule