import React, { useState } from 'react'
import './Header.css'
import { FaTimes, FaBeer } from 'react-icons/fa'
import { FiAlignJustify } from 'react-icons/fi'
import Nav from './nav'
const Header = ({Profile}) => {
    const [toggle, settoggle] = useState(true)
    const handletoggle = () => { settoggle(!toggle) }

    const FiAlignJustif = (<FiAlignJustify onClick={handletoggle} />)
    const FaTime = (<div>
        <FaTimes  onClick={handletoggle} />
    </div>)


    // const Menu = (<div className='slide-bar'>

    //     <div className='slide-bar2'>
    //         <a>HOME</a>
    //         <a>ABOUT</a>
    //         <a>CONTACT</a>
    //     </div>
    // </div>)
    return (
        <div className="Header-Cointainer">
            <div className="Header-Wraper">
                <div>LOGO</div>
                <Nav />
                <div className='Burger'>
                    {toggle ? FiAlignJustif : FaTime}
                </div>

            </div>
            <div>
               {!toggle? Profile:''}
            </div>
        </div>
    )
}

export default Header