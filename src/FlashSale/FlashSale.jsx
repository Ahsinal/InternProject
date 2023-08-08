import React, { useEffect, useState } from 'react'
import './FlashSale.css'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import CustomButton from '../Components/Buttons/CustomButton'
import FlashCards from './FlashCards'
import Carasoule from './Carasoule'
import HeadingIntro from '../Components/Headings/HeadingIntro'
const FlashSale = () => {
    const[time,setTime]=useState({days:2,hours:23,minutes:10,seconds:22});

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(prevTime=>{
                const{days,hours,minutes,seconds}=prevTime;
                if(days===0 && hours===0 && minutes===0 && seconds===0){
                    clearInterval(interval);
                }
                if(seconds>0){return{days,hours,minutes,seconds:seconds-1};}
                else if (minutes>0){return{days,hours,minutes:minutes-1,seconds:59};}
                else if(hours>0){return{days,hours:hours-1,minutes:59,seconds:59};}
                else if(days>0){return{days:days-1,hours:23,minutes:59,seconds:59};}
                return prevTime;
            });
        },1000);//update every seconds 
        return()=>clearInterval(interval)//clean up an unmount 
    },[]);
    return (
        <>
            <HeadingIntro label="Today's"/>

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
                                <td>{time.days}:</td>
                                <td>{time.hours} :</td>
                                <td>{time.minutes}:</td>
                                <td>{time.seconds} </td>
                            </tr>
                        </table>
                    </div>
                </div>

                {/* <div className="section__content__arrows">
                    <BsFillArrowLeftCircleFill className='custom-arrow' />
                    <BsFillArrowRightCircleFill className='custom-arrow' />
                </div> */}
            </div>
            <div className="flash__cards">
            {/* <FlashCards/> */}
            <Carasoule/>
            </div>

            <div className="section__footer">
               <CustomButton label="View All Products" />
            </div>
        </>
    )
}

export default FlashSale