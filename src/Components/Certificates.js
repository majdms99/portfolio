import React, { useState, useEffect, useContext } from 'react'
import { Container } from './styles/Container'
import Slider from "react-slick";
import { SubTitle } from './styles/SubTitle.styled';
import { Title } from './styles/Title.styled';
import { FaRegEye } from "react-icons/fa";
import { createClient } from 'contentful'
import { CertificatesStyle, BoxSlider, SliderItem } from './styles/Certificate.styled';
import { ModeContext } from '../Context/Mode';

const Certificates = () => {

    const { dark } = useContext(ModeContext);
    const [data, setData] = useState([])

    const fetchData = async () => {

        const client = createClient({
            space: '3fmd0edj5jrt',
            accessToken: 'txdTzBLFFxtshHjCW223EMIHCFu_1nxIQ2-W54Iou68'
        })

        const res = await client.getEntries({ content_type: 'certificates' })
        console.log('Car', res.items);
        setData(res.items)
    }

    useEffect(() => {
        fetchData();
    }, [])
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 750,
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
        <CertificatesStyle id='certificates'>
            <Container>
                <SubTitle>My portfolio</SubTitle>
                <Title>My Certificates</Title>
                <BoxSlider>
                    <Slider {...settings}>
                        {
                            data.map((item, index) => {
                                return (
                                    <SliderItem dark={dark} key={index}>
                                        <img loading='lazy' src={item.fields.image.fields.file.url} width='100%' height='100%' alt={item.fields.name} />
                                        <p>{item.fields.name}</p>
                                        <div>
                                            <a href={item.fields.demo} target="_blank" rel="noreferrer"><FaRegEye size={14} /> View</a>
                                        </div>
                                    </SliderItem>
                                )
                            })


                        }

                    </Slider>
                </BoxSlider>
            </Container>
        </CertificatesStyle>
    )
}

export default Certificates