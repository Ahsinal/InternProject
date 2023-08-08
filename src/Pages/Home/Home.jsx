import React from 'react'
import './Home.css'
import Navbrand from '../../Components/Navbarr/Navband/Navbrand'
import Navbarr from '../../Components/Navbarr/Navbarr'
import Sidenav from '../../Components/Sidenav/Sidenav'
import Carousel from '../../Components/Carousel/Carousel'
import FlashSale from '../../FlashSale/FlashSale'
const Home = () => {
  return (

    <>
      <Navbrand />
      <Navbarr />
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

      </div>
    </>
  )
}
export default Home