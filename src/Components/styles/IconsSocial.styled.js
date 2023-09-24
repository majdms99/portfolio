import styled from "styled-components";


export const IconsSocial = styled.ul`
    position: absolute;
    left: 10px;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &>a{
        text-decoration: none;
        padding: 5px;
        background-color: ${({ bg }) => bg};;
        margin: 4px;
        color: #7C89D1;
        transition: all 0.3s ease-in-out;
        /* opacity: 0.7; */

        &>:hover{
            opacity: 0.7;

        }
    }
`