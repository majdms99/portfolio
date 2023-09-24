import React, { useState, useEffect, useContext } from "react";
import { Container } from "./styles/Container";
import { SubTitle } from "./styles/SubTitle.styled";
import { Title } from "./styles/Title.styled";
import { WorkStyle, BoxesWork, BoxInfo, Date, Logo, Info, CompanyName, Position, Start, End } from "./styles/Work.styled";
import { FaCheckCircle } from "react-icons/fa";
import { createClient } from "contentful";
import { ModeContext } from "../Context/Mode";

const Skiles = () => {
  const { dark } = useContext(ModeContext);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const client = createClient({
      space: "3fmd0edj5jrt",
      accessToken: "txdTzBLFFxtshHjCW223EMIHCFu_1nxIQ2-W54Iou68",
    });

    const res = await client.getEntries({ content_type: "work_experience" });
    console.log('work_experience', res.items);
    setData(res.items);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WorkStyle>
      <Container>
        <SubTitle>My abilities</SubTitle>
        <Title>Work Experience</Title>
        <BoxesWork>

          {
            data.map((item, idx) => {
              return (
                <BoxInfo dark={dark} key={idx}>
                  <Logo src={item.fields.logo.fields.file.url} />
                  <Info>
                    <CompanyName>{item.fields.companyName}</CompanyName>
                    <Position>{item.fields.position}</Position>
                    <Date>
                      <Start>{item.fields.start_date} - </Start>
                      <End>{item.fields.endDate}</End>
                    </Date>
                  </Info>
                </BoxInfo>
              )
            })
          }
        </BoxesWork>
      </Container>
    </WorkStyle>
  );
};

export default Skiles;
