import React from 'react'
import './SignUp.css'
import CustomButton from '../../Components/Buttons/CustomButton'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
   <section className="signup__section">
    <div className="signup__image__section">
        <img src="https://img.freepik.com/free-vector/black-friday-concept-illustration_114360-3667.jpg?size=626&ext=jpg" alt="signup-image" />
    </div>
    <div className="signup__form__content">
        <h3>Create an account</h3>
        <h6>Enter your details below</h6>
        <form action="submit">
            <div className="form__input">
                <input type="text" placeholder='Name' />
            </div>
            <div className="form__input">
                <input type="text" placeholder='Email/Phone Number' />
            </div>
            <div className="form__input">
                <input type="password" placeholder='Password' />
            </div>
        </form>
        <div className="form__button">
            <button>Create Account</button>
        </div>
        <h6 className='text-center py-4'> Already have account?
        <Link>Login</Link>
        </h6>
    </div>
   </section>
  )
}

export default SignUp