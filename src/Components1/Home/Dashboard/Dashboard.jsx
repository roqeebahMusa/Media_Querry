import React from 'react'
import './Dashboard.css'
import './card.css'
import Header from '../Header/Header'
import Card from './Card'
import { MdViewStream } from "react-icons/md";
import { FaFantasyFlightGames } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { VscLibrary } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
// import Image from './Image.jpeg'
// import Controle from './Controle.png'
import Image from './image.jpg'
import Controle from './image.jpg'
function Dashboard() {
    const style={
        borderRadius:50
    }
    const Profile = (<div className='Profile_Menu'>
        <div className='Profile1'>
            <div className='Profile_imgCont' >
                <img src={Image} />
                {/* <h4>Oparah Nkume</h4> */}
                <h4>OBINNA</h4>
                <p>DEV</p>
            </div>

            <div className='Profile_icons'>
                <div className='iconsDiv'><MdViewStream className='icons' /><p>Streams</p></div>
                <div className='iconsDiv'><FaFantasyFlightGames className='icons' /><p>Games</p></div>
                <div className='iconsDiv P'><GiConsoleController className='icons' /><p>Upcoming</p></div>
                <div className='iconsDiv'><VscLibrary className='icons' /><p>Library</p></div>
            </div>
            <div className='Profile_footer'>
                <h4>join pro <br />for free <br />games.</h4>
                <img src={Controle} />
            </div>
        </div>

    </div>)

    const progress1 = (<div className='progress'><p></p></div>)
    const progress2 = (<div className='progress1'><p></p></div>)
    const progress3 = (<div className='progress2'><p></p></div>)
    return (
        <>
            <Header Profile={Profile} />
            <div className='Dash_Main'>
                <div className='Dash_Contain'>
                    <div className='Profile'>
                        <div className='Profile1'>
                            <div className='Profile_imgCont' >
                                <img src={Image} />
                                {/* <h4>Oparah Nkume</h4>
                                <p>CEO</p> */}
                                 <h4>OBINNA</h4>
                <p>DEV</p>
                            </div>

                            <div className='Profile_icons'>
                                <div className='iconsDiv'><MdViewStream className='icons' /><p>Streams</p></div>
                                <div className='iconsDiv'><FaFantasyFlightGames className='icons' /><p>Games</p></div>
                                <div className='iconsDiv P'><GiConsoleController className='icons' /><p>Upcoming</p></div>
                                <div className='iconsDiv'><VscLibrary className='icons' /><p>Library</p></div>
                            </div>
                            <div className='Profile_footer'>
                                <h4>join pro <br />for free <br />games.</h4>
                                <img style={style} src={Controle} />
                            </div>
                        </div>

                    </div>
                    <div className='Dashboard'>
                        <div className='sub_Dashboard'>
                            <div className='Head_cont'>
                                <h1>Active Games</h1>
                                <div className='inputDiv'><input placeholder='Search' /><BsSearch color='grey' fontSize={15} /></div>
                            </div>

                            <Card img={Image}
                                h4='Assassins Creed Valhalla'
                                text='PS5 version'
                                per='60%'
                                progress={progress1}
                            />
                            <Card img={Image}
                                h4='Spiderman-Miles Morales'
                                text='PS5 version'
                                per='60%'
                                progress={progress2}
                            />
                            <Card img={Image}
                                h4='Sackboy-A Big Advanture'
                                text='PS5 version'
                                per='90%'
                                progress={progress3}
                            />
                        </div>

                    </div>
                </div>
                <div className='Circle1'></div>
                <div className='Circle2'></div>
            </div>
        </>
    )
}
export default Dashboard