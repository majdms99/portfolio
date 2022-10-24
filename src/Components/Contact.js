import React, { useContext } from 'react'
import { Container } from './styles/Container'
import { SubTitle } from './styles/SubTitle.styled'
import { Title } from './styles/Title.styled'
import { ContactStyle, ContactBoxes, BoxInfo, Copy } from './styles/Contact.styled'
import { FaPhone, FaWhatsapp, FaTelegram, FaRegHeart } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";
import { ModeContext } from '../Context/Mode'


const Contact = () => {
    const { dark } = useContext(ModeContext);

    const data = [
        {
            id: '1',
            icone: <SiGmail size={35} />,
            name: 'E-mail',
            value: 'majdmhdsalameh99@gmail.com',
            link: 'mailto:majdmhdsalameh99@gmail.com',
            contact: 'Write me'
        },
        {
            id: '2',
            icone: <FaPhone size={35} />,
            name: 'Phone Number',
            value: '00-963-937-997-908',
            link: 'tel:00-963-937-997-908',
            contact: 'Call me'
        },
        {
            id: '3',
            icone: <FaTelegram size={35} />,
            name: 'Telegram',
            value: 'https://t.me/majdsalameh',
            link: 'https://t.me/majdsalameh',
            contact: 'Write me'
        },
        {
            id: '4',
            icone: <FaWhatsapp size={35} />,
            name: 'Whatsapp',
            value: '00-963-937-997-908',
            link: 'https://wa.me/qr/IO74L7WT432TG1',
            contact: 'Write me'
        },

    ]
    return (
        <ContactStyle id='contact'>
            <Container>
                <SubTitle>Get in tuch</SubTitle>
                <Title>Contact Me</Title>
                <ContactBoxes>
                    {
                        data.map(item => {
                            return (
                                <BoxInfo dark={dark} key={item.id}>
                                    {item.icone}
                                    <h6>{item.name}</h6>
                                    <p>{item.value}</p>
                                    <a href={item.link} target='_blank' rel="noreferrer">{item.contact}</a>
                                </BoxInfo>
                            )
                        })
                    }

                </ContactBoxes>
                <Copy>Copyright 2022 | created by: <span><FaRegHeart />Majd Salameh</span></Copy>
            </Container>
        </ContactStyle>
    )
}

export default Contact