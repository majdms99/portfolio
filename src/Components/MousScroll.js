import React from 'react'
import { BiMouse } from "react-icons/bi";
import { MousScrollStyle, Box } from './styles/MousScroll.style';
import Fade from 'react-reveal/Fade'

const MousScroll = () => {
    return (
        <MousScrollStyle href='#about'>
            <Fade bottom big >
                <Box>
                    <span><BiMouse size={25} /></span>
                    <p>Scroll Down</p>
                </Box>
            </Fade>
        </MousScrollStyle>
    )
}

export default MousScroll