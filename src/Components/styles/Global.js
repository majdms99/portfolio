import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto Regular'), local('Roboto-Regular'), url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,700;0,900;1,300&display=swap) format('woff2');
  font-display: swap;
}
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