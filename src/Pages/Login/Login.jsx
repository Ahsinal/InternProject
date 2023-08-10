import React from 'react'
import './Login.css'
import CustomButton from '../../Components/Buttons/CustomButton'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <section className="login__section">
    <div className="login__image__section">
        <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?size=626&ext=jpg" alt="login-image" />
    </div>
    <div className="login__form__content">
        <h3>Login to Exclusive</h3>
        <h6>Enter your details below</h6>
        <form action="submit">
            <div className="form__input">
                <input type="text" placeholder='Email/Phone Number' />
            </div>
            <div className="form__input">
                <input type="password" placeholder='Password' />
            </div>
        </form>
        <CustomButton label="login"/>
        <Link>Forget Password?</Link>
    </div>
   </section>
  )
}

export default Login