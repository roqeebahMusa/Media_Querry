import React, { useState } from 'react'
import './Header.css'
import { FaTimes, FaBeer } from 'react-icons/fa'
import { FiAlignJustify } from 'react-icons/fi'
const Header = () => {
    const [toggle, settoggle] = useState(true)
    const handletoggle = () => { settoggle(!toggle) }
    return (
        <div className="Header-Cointainer">
            <div className="Header-Wraper">
                <div>LOGO</div>
                <div className='Nav-tab'>
                    <a>HOME</a>
                    <a>ABOUT</a>
                    <a>CONTACT</a>
                </div>
                <div className='Burger'>
                    {toggle ? <FiAlignJustify onClick={handletoggle} /> : <FaTimes onClick={handletoggle} />}
                </div>

            </div>

        </div>
    )
}

export default Header