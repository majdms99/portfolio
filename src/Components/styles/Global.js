import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body{
        background-color:${({ dark }) => dark ? '#070914' : '#f5f7ff'} ;
        color: ${({ dark }) => dark ? '#fff' : '#000'};
        font-family: 'Roboto', sans-serif;
    }
    .slick-initialized .slick-slide {
    padding: 20px;
}
 
`

export default Global;