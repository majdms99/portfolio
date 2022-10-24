import React, { useState, useEffect } from 'react'
import { AboutStyle, BoxInfo, Image, AboutSectionStyle } from './styles/About.styled'
import { Button } from './styles/Button'
import { Container } from './styles/Container'
import { SubTitle } from './styles/SubTitle.styled'
import { Title } from './styles/Title.styled'
import { createClient } from 'contentful'


const About = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {

        const client = createClient({
            space: '3fmd0edj5jrt',
            accessToken: 'txdTzBLFFxtshHjCW223EMIHCFu_1nxIQ2-W54Iou68'
        })

        const res = await client.getEntries({ content_type: 'aboutMe' })
        // console.log('data', res.items);
        setData(res.items)
    }

    useEffect(() => {
        fetchData();
    }, [])



    return (
        <AboutSectionStyle id="about">
            <Container>
                <SubTitle>My Intro</SubTitle>
                <Title>About Me</Title>
                <AboutStyle>
                    <Image src='./react-photo.svg' width='100%' height='100%' alt='Hero image' />
                    <BoxInfo>
                        {/* <p>My name is Majd Mohammad Salameh, from Tartous Syria, I study communications technology -  mobile communications systems at the Syrian Virtual University, I work as a Front-end with more than one year of experience and I am interested In the field of web development, programming and Internet of things systems</p> */}
                        {
                            data.map((item, index) => {
                                return (
                                    <p key={index}>{item.fields.description} </p>
                                )
                            })
                        }

                        <Button href='#contact' bg='#929DD9' color='#070914'>Contact Me</Button>
                    </BoxInfo>
                </AboutStyle>
                {console.log(data)}
            </Container>
        </AboutSectionStyle>


    )
}

export default About