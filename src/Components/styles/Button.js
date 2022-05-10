import styled from "styled-components";

export const Button = styled.a`
    border: 1px solid #929DD9;
    padding: 8px 15px;
    background-color: ${({ bg }) => bg || 'transparent'};
    color: ${({ color }) => color || '#929DD9'};
    margin-right: 20px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    &:hover{
        opacity: 0.7;
    }

`