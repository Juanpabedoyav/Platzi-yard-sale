import React from 'react'
import logo_yard_sale from '../assets/logos/logo_yard_sale.svg'
import '../styles/Login.style.css'

const Login = () => {
    return (
        <div className='login'>
        <section className='form_container'>
            <figure className='form_img'>
                <img className='img' src={logo_yard_sale} alt="logo" />
            </figure>
            <form className='form'>
                <div>
                    <label className='form_label' htmlFor="email">Email adress</label>
                    <input 
                    className='form_input'
                    id='email' 
                    type="text"
                    placeholder='example@gmail.com' />
                </div>
                <div>
                    <label className='form_label' htmlFor="Password">Password</label>
                    <input 
                    className='form_input'
                    id='Password' 
                    type="password"
                    placeholder='********' />
                </div>
                <button  className='primary-button' type='submit'>Login</button>
                <a href="/">Forgot my password</a>
                <button  className='secundary-button' type='button'>Sign Up</button>  

            </form>            
        </section>
</div>
    )
}

export default Login
