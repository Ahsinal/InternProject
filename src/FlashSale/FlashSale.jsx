import React from 'react'
import './FlashSale.css'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import CustomButton from '../Components/Buttons/CustomButton'
import FlashCards from './FlashCards'

const FlashSale = () => {
    return (
        <>
            <div className="section__header">
                <div className="block"></div>
                <h5>Today's</h5>
            </div>

            <div className="section__content">
                <div className="section__content__time">
                    <div className="section__content__time__heading">
                        <h3>Flash Sales</h3>
                    </div>
                    <div className="clock">
                        <table>
                            <tr>
                                <th>Days</th>
                                <th>Hours</th>
                                <th>Minutes</th>
                                <th>Seconds</th>
                            </tr>
                            <tr>
                                <td>03 :</td>
                                <td>23 :</td>
                                <td>19 :</td>
                                <td>56 </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="section__content__arrows">
                    <BsFillArrowLeftCircleFill className='custom-arrow' />
                    <BsFillArrowRightCircleFill className='custom-arrow' />
                </div>
            </div>
            <div className="flash__cards">
            <FlashCards/>
            </div>

            <div className="section__footer">
               <CustomButton label="View All Products" />
            </div>
        </>
    )
}

export default FlashSale