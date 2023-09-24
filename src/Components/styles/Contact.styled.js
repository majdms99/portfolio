import styled from 'styled-components'

export const ContactStyle = styled.div`
    padding: 50px 0;
`
export const ContactBoxes = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;

    @media(max-width:786px){
        flex-direction: column;
    }
`
export const BoxInfo = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
     background-color: ${({ dark }) => dark ? '#02010d' : '#fff'};
    box-shadow: ${({ dark }) => dark ? '5px 5px 5px #02010b' : '5px 5px 5px #ddd'};
    border-radius:15px;
    margin-bottom: 25px;

    @media(max-width:786px){
        width: 100%;
    }

    &>h6{
        font-size: 17px;
        margin: 10px 0px;
    }

    &>p{
        font-size: 14px;
        opacity: 0.8;
        margin-bottom: 15px;
    }

    &>a{
        color: #7C89D1;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
    }

`
export const Copy = styled.p`
    text-align: center;
    margin: 20px 0 35px;
    font-size: 14px;
    letter-spacing: 1px;
    opacity: 0.8;

    &>span{
        color: #7C89D1;

        &>svg{
            margin-right: 2px;
            font-size: 13px;
        }
    }
`