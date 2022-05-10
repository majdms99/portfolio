import styled from 'styled-components'

export const SkilesStyle = styled.div`
    padding: 50px 0;
`

export const BoxesSkiles = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 1;
    align-items: center;
    width: 90%;
    margin: auto;

       @media(max-width:900px){
        flex-direction: column;
        margin-bottom: 20px;
    }
`

export const BoxInfo = styled.div`
    padding: 40px;
    width: 375px;
     background-color: ${({ dark }) => dark ? '#02010d' : '#fff'};
    box-shadow: ${({ dark }) => dark ? '5px 5px 5px #02010b' : '5px 5px 5px #ddd'};
    border-radius: 30px;
    margin-bottom: 30px;

    @media(max-width:400px){
        width: 100%;
        margin:15px auto;
        padding: 40px 15px;
    }

    &>h3{
        font-size: 18px;
        text-align: center;
        color: #7C89D1;
        margin-bottom: 30px;

         
    }

    &>ul{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        list-style: none;


        &>li{
            width: 50%;
            padding:10px;
            font-size: 18px;
            font-weight: 600;
             @media(max-width:586px){
                 font-size: 16px;
                  /* padding:10px 0; */
             }
        

            &>span{
                margin-right: 8px;
                font-size: 13px;
                color: #7C89D1;
            }

            &>p{
                font-size: 12px;
                font-weight: 00;
                margin-left: 20px;
                margin-top: 5px;
                letter-spacing: 0.5px;

            }

           
        }
    }
`