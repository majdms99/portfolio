import styled from "styled-components";

export const FirstSectionStyle = styled.div`
    position: relative;
    padding: 50px 0px;
`

export const BoxInfo = styled.div`
    width: 60%;
    margin: auto;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &>p{
        font-size: 17px;
    }

    &>h1{
        font-size: 35px;
        margin: 10px 0;
    }

    &>h5{
        font-size: 20px;
        color:#7C89D1 ;
        margin-bottom: 25px;
    }

    &>img{
        width: 250px;
        border-top-left-radius: 40%;
        border-top-right-radius: 40%;
        margin-top: 20px;
    }
    
    

    @media(max-width:768px){
        width: 90%;
    }

`
export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    
`
