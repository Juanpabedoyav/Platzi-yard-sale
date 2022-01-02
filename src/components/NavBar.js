import React from 'react'
import '../styles/NavBar.styles.css'
const NavBar = () => {
    return (
        <header>
            <nav className='navBar'>
                <ul className='navBar_nav'>
                    <li className='navBar_item'>Toogle bar</li>
                    <li className='navBar_item'>logo</li>
                    <li className='navBar_item'>car</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
