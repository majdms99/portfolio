import React from 'react'
import { Container } from './styles/Container'
import { Button } from './styles/Button'
import { FirstSectionStyle, BoxInfo, ButtonGroup } from './styles/FirstSection.styled'
import IconesSocial from './IconesSocial'
import Typed from 'react-typed'
import MousScroll from './MousScroll'
import Fade from 'react-reveal/Fade'

const FirstSection = () => {



    return (

        <FirstSectionStyle id='home'>
            <Container>
                <BoxInfo>
                    <Fade top >
                        <p>Hello, I'm</p>
                        <h1>Majd Salameh</h1>
                        <h5>
                            <Typed
                                strings={['FrontEnd Web Developer', 'React Developer']}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                            />
                        </h5>
                        <ButtonGroup>
                            <Button href='https://drive.google.com/file/d/1i8OrcVkzmnqVZiLjTVdcDVBXfXOCG-50/view' target='_blank' >Download CV</Button>
                            <Button href='#about' bg='#929DD9' color='#070914'>About Me</Button>
                        </ButtonGroup>
                    </Fade>
                    <Fade bottom  >
                        <img src='./new.jpeg' width='100%' height='100%' alt="My_photo" />
                    </Fade>
                </BoxInfo>

                <IconesSocial />
                <MousScroll />
            </Container>
        </FirstSectionStyle>
    )
}

export default FirstSection