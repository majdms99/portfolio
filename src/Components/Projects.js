import React, { useState, useEffect, useContext } from 'react'
import { ProjectsStyle, BoxSlider, SliderItem } from './styles/Projects.styled'
import { Container } from './styles/Container'
import Slider from "react-slick";
import { SubTitle } from './styles/SubTitle.styled';
import { Title } from './styles/Title.styled';
import { FaRegEye, FaCode } from "react-icons/fa";
import { createClient } from 'contentful'
import { ModeContext } from '../Context/Mode';


const Projects = () => {

    const { dark } = useContext(ModeContext);
    const [data, setData] = useState()

    const fetchData = async () => {

        const client = createClient({
            space: '3fmd0edj5jrt',
            accessToken: 'txdTzBLFFxtshHjCW223EMIHCFu_1nxIQ2-W54Iou68'
        })

        const res = await client.getEntries({ content_type: 'works' })
        console.log('Wor', res.items);
        setData(res.items)
    }

    useEffect(() => {
        fetchData();
    }, [])
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [

            {
                breakpoint: 586,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <ProjectsStyle id='projects'>
            <Container>
                <SubTitle>My portfolio</SubTitle>
                <Title>Recent Works</Title>
                <BoxSlider>
                    <Slider {...settings}>
                        {
                            data ? data.map((item, index) => {
                                return (
                                    <SliderItem dark={dark} key={index}>
                                        <img src={item.fields.image.fields.file.url} width='100%' height='100%' alt={item.fields.name} />
                                        <p>{item.fields.name}</p>
                                        <div>
                                            <a href={item.fields.demo} target="_blank" rel="noreferrer" aria-hidden="true"><FaRegEye size={14} /> Demo</a>
                                            <a href={item.fields.code} target="_blank" rel="noreferrer" aria-hidden="true"><FaCode size={14} /> Code</a>
                                        </div>
                                    </SliderItem>
                                )
                            })

                                : ''
                        }

                    </Slider>
                </BoxSlider>
            </Container>
        </ProjectsStyle>
    )
}

export default Projects