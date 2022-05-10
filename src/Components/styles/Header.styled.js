import styled from "styled-components";

export const HeaderStyled = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.h1`
    font-size: 20px;
    display: flex;
    align-items: center;

    &>svg{
        margin-right: 8px;
    }

    &>span{
        font-size: 25px;
        color: #7C89D1;
    }
`

export const Icons = styled.div`
    cursor: pointer;

`