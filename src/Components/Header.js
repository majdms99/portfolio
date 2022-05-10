import React, { useContext } from 'react'
import { Container } from './styles/Container'
import { BiMoon, BiSun } from "react-icons/bi";
import { FaTeamspeak } from "react-icons/fa";
import { HeaderStyled, Nav, Logo, Icons } from './styles/Header.styled';
import { ModeContext } from '../Context/Mode';

const Header = () => {

    const { dark, setDark } = useContext(ModeContext);


    const changeMode = () => {
        setDark(!dark);

    }
    // const darkMode = localStorage.getItem('dark');
    // console.log(darkMode)
    return (
        <HeaderStyled >
            <Container>
                <Nav>
                    <Logo><FaTeamspeak size={25} color={'#7C89D1'} />Majd<span>.</span></Logo>
                    <Icons onClick={changeMode}>
                        {dark ? <BiMoon size={20} /> : <BiSun size={20} />}
                    </Icons>
                </Nav>

            </Container>
        </HeaderStyled>
    )
}

export default Header