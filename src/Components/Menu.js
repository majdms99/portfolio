import React, { useContext } from 'react'
import { BsHouseDoor, BsPerson, BsGrid, BsTrophy, BsDiagram3, BsChatDots } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { ModeContext } from '../Context/Mode'
import { MenuStyle, IconItem, IconsLink } from './styles/Menu.styled'

const data = [
    {
        id: 1,
        link: 'home',
        icone: <BsHouseDoor size={17} />,
    },
    {
        id: 2,
        link: 'about',
        icone: <BsPerson size={17} />
    },
    {
        id: 3,
        link: 'skiles',
        icone: <BsGrid size={17} />
    },
    {
        id: 4,
        link: 'projects',
        icone: <BsDiagram3 size={17} />
    },
    {
        id: 5,
        link: 'certificates',
        icone: <BsTrophy size={17} />
    },

    {
        id: 6,
        link: 'contact',
        icone: <BsChatDots />
    }
]


const Menu = () => {
    const { dark } = useContext(ModeContext);

    return (

        <MenuStyle bg={dark ? '#02010d' : '#fff'}>
            <IconsLink>
                {
                    data.map(item => {
                        return (
                            <IconItem key={item.id}>
                                <Link to={item.link}>{item.icone}</Link>
                            </IconItem>
                        )
                    })
                }
                {/* <IconItem>
                    <BsHouseDoor />
                </IconItem>
                <IconItem>
                    <BsPerson />
                </IconItem>
                <IconItem>
                    <BsGrid />
                </IconItem>
                <IconItem>
                    <BsTrophy />
                </IconItem>
                <IconItem>
                    <BsDiagram3 />
                </IconItem>
                <IconItem>
                    <BsChatDots />
                </IconItem> */}
            </IconsLink>
        </MenuStyle>
    )
}

export default Menu