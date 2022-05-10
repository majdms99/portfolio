import React, { useState, useEffect, useContext } from 'react'
import { Container } from './styles/Container'
import { SubTitle } from './styles/SubTitle.styled'
import { Title } from './styles/Title.styled'
import { SkilesStyle, BoxesSkiles, BoxInfo } from './styles/Skiles.styled'
import { FaCheckCircle } from "react-icons/fa";
import { createClient } from 'contentful'
import { ModeContext } from '../Context/Mode'


const Skiles = () => {
    const { dark } = useContext(ModeContext);
    const [data, setData] = useState([])

    const fetchData = async () => {

        const client = createClient({
            space: '3fmd0edj5jrt',
            accessToken: 'txdTzBLFFxtshHjCW223EMIHCFu_1nxIQ2-W54Iou68'
        })

        const res = await client.getEntries({ content_type: 'skiles' })
        setData(res.items)
    }



    useEffect(() => {
        fetchData();
    }, [])

    const webTech = data.filter(item => {
        return item.fields.type === 'web';
    })
    const otherTech = data.filter(item => {
        return item.fields.type === 'other';
    })



    return (


        <SkilesStyle SkilesStyle id='skiles' >
            <Container>
                <SubTitle>My abilities</SubTitle>
                <Title>My Experience</Title>
                <BoxesSkiles>
                    <BoxInfo dark={dark}>
                        <h3>Fron-End Technologies</h3>
                        <ul>
                            {
                                webTech.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <span><FaCheckCircle /></span>
                                            {item.fields.name}
                                            <p>{item.fields.level}</p>
                                        </li>
                                    )
                                })

                            }
                        </ul>
                    </BoxInfo>
                    <BoxInfo dark={dark}>
                        <h3>Other</h3>
                        <ul>
                            {
                                otherTech.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <span><FaCheckCircle /></span>
                                            {item.fields.name}
                                            <p>{item.fields.level}</p>
                                        </li>
                                    )
                                })

                            }
                        </ul>
                    </BoxInfo>
                </BoxesSkiles>
            </Container>
        </SkilesStyle >
    )
}

export default Skiles