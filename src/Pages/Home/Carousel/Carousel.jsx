import React, { useState } from 'react'
import { AiFillLeftCircle, AiFillRightCircle ,AiTwotoneCheckCircle} from 'react-icons/ai'
const Carousel = () => {
    const slides = [
        {
            url: 'https://img.freepik.com/premium-photo/pants-men-s-hands-clothing-store-close-up_255667-8821.jpg?size=626&ext=jpg',
            alt: "pic1",
            title: 'Sale'
        },
        {
            url: 'https://img.freepik.com/premium-photo/home-decor-store-filled-with-beautifully-designed-crafted-accessories_124507-103214.jpg?size=626&ext=jpg',
            alt: 'pic2',
            title: 'Black Friday'
        },
        {
            url: 'https://img.freepik.com/free-photo/composition-make-up-tools-hiding-skin-blemishes_23-2148181438.jpg?size=626&ext=jpg',
            alt: 'pic3',
            title: 'Heavy Sale'
        },
        {
            url: 'https://img.freepik.com/free-photo/clothing-store-with-blurred-effect_23-2148164717.jpg?size=626&ext=jpg',
            alt: "pic1",
            title: 'Discount'
        },
        {
            url: 'https://img.freepik.com/free-photo/shopping-trolleys-packets-tags_23-2147961897.jpg?size=626&ext=jpg',
            alt: 'pic2',
            title: 'Black Friday'
        },
        {
            url: 'https://img.freepik.com/premium-photo/abstract-flying-tech-pieces-gray-background-with-mock-up-place-laptop-computer-speakers-headphones-music-technology-concept-3d-rendering_670147-14746.jpg?size=626&ext=jpg',
            alt: 'pic3',
            title: '50% discount'
        },
        {
            url: 'https://img.freepik.com/free-photo/clothing-store-with-blurred-effect_23-2148164717.jpg?size=626&ext=jpg',
            alt: "pic1",
            title: 'Discount'
        }

    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerStyles = {
        width: "100%",
        height: "100%",
        margin: "0 auto",
        position: 'relative'
    };
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
        // backgroundColor:"black"
    };
    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: '1',
        cursor: "pointer",
        opacity:'0.75'
    };
    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0,-50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: '1',
        cursor: "pointer",
        opacity:'0.75'
    };
    const dotsContainerStyles={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:'20px',
        width:'100%'
    };
    const activeDotStyles = {
        marginLeft: '0.65rem',
        cursor: 'pointer',
        color: 'white' // Change the color of the active dot
    };
    const inactiveDotStyles = {
        marginLeft: '0.65rem',
        cursor: 'pointer',
        color: 'grey'
    };
    const gotoPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const gotoNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const gottoSlide =slideIndex=>{
        setCurrentIndex(slideIndex);
    }
    return (
        <div style={containerStyles}>
            <div style={leftArrowStyles} onClick={gotoPrevious}>
                <AiFillLeftCircle />
            </div>
            <div style={rightArrowStyles} onClick={gotoNext}>
                <AiFillRightCircle />
            </div>
            <div style={slideStyles}>
            <div style={dotsContainerStyles}>
                {
                    slides.map((slide,slideIndex)=>(
                      <div key={slideIndex}
                      style={currentIndex===slideIndex ?activeDotStyles :inactiveDotStyles} 
                      onClick={()=>gottoSlide(slideIndex)}>
                        <AiTwotoneCheckCircle/>
                      </div>  
                    ))
                }
            </div>
            </div>
            
        </div>
    )
}

export default Carousel