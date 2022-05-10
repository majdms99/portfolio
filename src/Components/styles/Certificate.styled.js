import styled from 'styled-components'

export const CertificatesStyle = styled.div`
    padding: 50px 0;
`

export const BoxSlider = styled.div`
    width: 90%;
    margin: auto;

    @media(max-width:550px){
        width: 100%;
    }
`
export const SliderItem = styled.div`
    background-color: ${({ dark }) => dark ? '#02010d' : '#fff'};
    box-shadow: ${({ dark }) => dark ? '5px 5px 5px #02010b' : '5px 5px 5px #ddd'};
    /* margin: 20px; */
    padding: 25px;
    border-radius: 20px;
    /* height: 280px; */

    &>img{
        width: 100%;
         border-radius: 20px;
    }

    &>p{
       font-weight: 600;
        margin: 10px 0;
        font-size: 15px;
        opacity: 0.8;
    }
    &>div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        &>a{
            color: #7C89D1;
            text-decoration: none;
            font-weight: 600;
            font-size: 12px;
            display: flex;
            align-items: center;

            &>svg{
                margin-right: 5px;
            }
        }
    }
`