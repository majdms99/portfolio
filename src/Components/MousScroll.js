import React from 'react'
import { BiMouse } from "react-icons/bi";
import { MousScrollStyle } from './styles/MousScroll.style';
import Fade from 'react-reveal/Fade'

const MousScroll = () => {
    return (
        <Fade bottom big >
            <MousScrollStyle href='#about'>
                <span><BiMouse size={25} /></span>
                <p>Scroll Down</p>
            </MousScrollStyle>
        </Fade>
    )
}

export default MousScroll