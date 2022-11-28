import React, { useState } from 'react'
import './Facebook.css'
import logo from './download.png'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { TbBuildingStore } from "react-icons/tb";

import { MdHome } from "react-icons/md";

import { MdOutlineOndemandVideo } from "react-icons/md"
import { MdGroups } from "react-icons/md"
import { SiFacebookgaming } from "react-icons/si";
import { SiMessenger } from "react-icons/si";
import { HiBell } from "react-icons/hi";
const Facebook = () => {
    return (
        <div className='face-Header'>
            <div className='face-Header1'>
                <div className='face-Header-left'>
                    {/* <img style={{ width: 35, height: 35 }} src={logo} /> */}
                    <BsFacebook fontSize='35'/>
                    <input className='input'  placeholder='Serach Facebook' />
                </div>
                <div className='cont'>
                    <div className='face-Header-middle'>
                        <MdHome fontSize='35' />
                        <MdOutlineOndemandVideo fontSize='35' />
                        <TbBuildingStore fontSize='35' />
                        <MdGroups fontSize='35' />
                        <SiFacebookgaming fontSize='30' />
                    </div>
                    <div className='face-Header-right'>
                        <BsFillGrid3X3GapFill fontSize='30' />
                        <SiMessenger fontSize='30' />
                        <HiBell fontSize='35' />
                        <img style={{ width: 35, height: 35 }} src={logo} />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Facebook