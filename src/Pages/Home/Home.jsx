import React from 'react'
import './Home.css'
import Navbrand from '../../Components/Navbarr/Navband/Navbrand'
import Navbarr from '../../Components/Navbarr/Navbarr'
import Carousel from './Carousel/Carousel'
import FlashSale from './FlashSale/FlashSale'
import Categories from './Categories/Categories'
import BestSelling from './BestSelling/BestSelling'
import Sidenav from './Sidenav/Sidenav'
import Banner from './Banner/Banner'
import OurProducts from './OurProducts/OurProducts'
import NewArrival from './NewArrival/NewArrival'
const Home = () => {
  return (

    <>
      <div className="home__page">
        <div className="main__content">
          <div className="side__nav">
            <Sidenav/>
          </div>
          <div className="main__carasoule">
            <Carousel/>
          </div>
        </div>

        {/* /..................FLASH SALE.........................................../ */}
        <section className="flashSale__section">
         <FlashSale/>
        </section>

        <section className="categories__section">
          <Categories/>
        </section>

        <section className="bestSelling__section">
          <BestSelling/>
        </section>

        <section className="banner__section">
          <Banner/>
        </section>

        <section className="Products_section">
          <OurProducts/>
        </section>

        <section className="new__arrival">
          <NewArrival/>
        </section>
      </div>
    </>
  )
}
export default Home