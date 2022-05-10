import React, { useContext } from 'react'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'
import { ModeContext } from '../Context/Mode'
import { IconsSocial } from './styles/IconsSocial.styled'
import Fade from 'react-reveal/Fade'

const data = [
    {
        id: '1',
        link: 'https://www.linkedin.com/in/majd-salameh-baa27a210',
        icone: <FaLinkedin />
    },
    {
        id: '2',
        link: 'https://github.com/majdms99/',
        icone: <FaGithub />
    },
    {
        id: '3',
        link: 'https://www.facebook.com/profile.php?id=100007490057951',
        icone: <FaFacebook />
    }
]
const IconesSocial = () => {
    const { dark } = useContext(ModeContext);
    return (
        <IconsSocial bg={dark ? '#02010d' : '#fff'}>
            <Fade bottom big >
                {
                    data.map(item => {
                        return (
                            <a href={item.link} key={item.id} target='_blank' rel="noreferrer">{item.icone}</a>
                        )
                    })
                }
            </Fade>
        </IconsSocial>
    )
}

export default IconesSocial