import styled from "styled-components";

export const MousScrollStyle = styled.a`
    position: absolute;
    right: 10px;
    bottom: 66px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #7C89D1;

    &>span{
        position: relative;
    }

    &>p{
      transform: rotate(90deg);
    position: absolute;
    top: 67px;
    right: -30px;
    width: 86px;
    font-size: 12px;
    }
    
`