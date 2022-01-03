import React from 'react'
import logo_yard_sale from '../assets/logos/logo_yard_sale.svg'
import '../styles/Email.style.css'
import email from '../assets/icons/email.svg'
const Email = () => {
    return (
        <div className='email'>
            <section className='email_container'>
                <figure className='email_img'>
                    <img className='img' src={logo_yard_sale} alt="logo" />
                </figure>
                <h1 className='email_title'>Email has been sent !</h1>
                <p className='email_subtitle'>Please check your inbox for instructions
                on how to reset the password
                </p>
                <figure className='email_sent'>
                    <img className='img' src={email} alt="logo" />
                </figure>
                <button className='primary-button'>Login</button> 
                <p className='resend'>
                    <span>Didn't recieve the email?</span>
                    <a href="/">Resend</a>
                </p>
            </section>
    </div>
    )
}

export default Email
