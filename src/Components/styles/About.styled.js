import styled from "styled-components";

export const AboutSectionStyle = styled.div`
    padding: 50px 0;
`
export const AboutStyle = styled.div`
    display: flex;
    justify-content:space-between;
    flex: 1;
    align-items: center;
    width: 80%;
    margin: auto;

    @media(max-width:786px){
        flex-direction: column;
    }
`
export const Image = styled.img`
    width: 300px;
    border-radius: 20px;
`
export const BoxInfo = styled.div`
padding: 0 40px;

@media(max-width:786px){
    margin-top: 30px;
    padding: 0px;
}
    &>p{
        font-size: 14px;
        opacity: 0.8;
        line-height: 1.6;
        margin-bottom: 30px;
    }
`