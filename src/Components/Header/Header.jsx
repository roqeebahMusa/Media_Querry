import React, { useState } from 'react'
import './Header.css'
import { FaTimes, FaBeer } from 'react-icons/fa'
import { FiAlignJustify } from 'react-icons/fi'
import Nav from './nav'
const Header = () => {
    const [toggle, settoggle] = useState(true)
    const handletoggle = () => { settoggle(!toggle) }

    let FiAlignJustif = (<FiAlignJustify onClick={handletoggle} />)
    let FaTime = (<div className='slide-bar'>
        <div className='slide-bar1'>
            <FaTimes fontSize='25' onClick={handletoggle} />
        </div>
        <div className='slide-bar2'>
            <a>HOME</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
        </div>
    </div>)
    return (
        <div className="Header-Cointainer">
            <div className="Header-Wraper">
                <div>LOGO</div>
                <Nav />
                <div className='Burger'>
                    {toggle ? FaTime : FiAlignJustif}
                </div>

            </div>

        </div>
    )
}

export default Header