import React from 'react'
import '../styles/NewPassword.style.css'
import logo_yard_sale from '../assets/logos/logo_yard_sale.svg'

const NewPassword = () => {
    return (
    <div className='recovery'>
            <section className='form_container'>
                <figure className='form_img'>
                    <img className='img' src={logo_yard_sale} alt="logo" />
                </figure>
                <h1 className='form_title'>Create a new password</h1>
                <p className='form_subtitle'>Enter a new password for you account</p>
                <form className='form'>
                    <div>
                        <label className='form_label' htmlFor="password">Password</label>
                        <input 
                        className='form_input'
                        id='password' 
                        type="password"
                        placeholder='********' />
                    </div>
                    <div>
                        <label className='form_label' htmlFor="rePassword">Re-enter password</label>
                        <input 
                        className='form_input'
                        id='rePassword' 
                        type="password"
                        placeholder='********' />
                    </div>
                    <button  className='primary-button' type='submit'>Confirm new password</button>
                </form>  
            </section>
    </div>
    )
}

export default NewPassword
