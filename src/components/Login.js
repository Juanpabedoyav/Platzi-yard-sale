import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo_yard_sale from '../assets/logos/logo_yard_sale.svg'
import '../styles/Login.style.css'

const Login = () => {
    const navigate = useNavigate()

    return (
        <div className='login'>
        <section className='login_container'>
            <figure className='login_img'>
                <img className='img' src={logo_yard_sale} alt="logo" />
            </figure>
            <form className='form form--login'>
                <div>
                    <label className='form_label form_label--login' htmlFor="email">Email adress</label>
                    <input 
                    className='form_input form_input--login'
                    id='email' 
                    type="text"
                    placeholder='example@gmail.com' />
                </div>
                <div>
                    <label className='form_label form_label--login' htmlFor="Password">Password</label>
                    <input 
                    className='form_input form_input--login'
                    id='Password' 
                    type="password"
                    placeholder='********' />
                </div>
                <div className='buttons'>
                    <div>
                        <button  className='primary-button primary-button--login' type='submit'>Login</button>
                        <Link to="/newpassword">Forgot my password</Link>
                    </div>
                    <button onClick={navigate()}  className='secundary-button' type='button'>Sign Up</button>
                </div>
            </form>            
        </section>
</div>
    )
}

export default Login
