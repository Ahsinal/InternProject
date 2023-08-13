import React from 'react'
import './Contact.css'
import {AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import BreadcrumbComponent from '../../Components/BreadcrumbComponent'
import CustomButton from '../../Components/Buttons/CustomButton'
const Contact = () => {
  //contact us paths
  const paths=[{name:'Contact',link:'/contact'}]
  return (
    <section className="contact__page">
      <div className="contact__header">
      <BreadcrumbComponent paths={paths}/>
      </div>

      <div className="contact__content">
        <div className="contact__info">
         <div className="contact__info__col">
          <div className="contact__info__col__header">
            <div className="contact__info__col__header__circle">
              <AiOutlinePhone className='contact__info__col__header__circle__icon'/>
            </div>
            <h6>Call To US</h6>
          </div>
          <p>We are available 24/7,7 days a week.</p>
          <p>Phone: +8801611112222</p>
         </div>
         
         <hr  className='afterline'/>

         <div className="contact__info__col">
          <div className="contact__info__col__header">
            <div className="contact__info__col__header__circle">
              <AiOutlineMail className='contact__info__col__header__circle__icon'/>
            </div>
            <h6>Call To US</h6>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
         </div>

        </div>
        <div className="contact__form">
          <form action="subit">
            <div className="form__inputs">
              <div className="form__input__box">
                <input type="text" placeholder='Your Name *'/>
              </div>
              <div className="form__input__box">
                <input type="text" placeholder='Your Email *'/>
              </div>
              <div className="form__input__box">
                <input type="text" placeholder='Your Phone *' />
              </div>
            </div>

            <div className="form__input__texatarea">
             <textarea name="" id=""  rows="100" placeholder='Your Message'/>
            </div>
            <div className="contact__button">
              <CustomButton label="Send Message"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact