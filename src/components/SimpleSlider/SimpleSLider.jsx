import React from "react";
import Slider from "react-slick";
import styled from 'styled-components'

import textLogo1 from './Mask group (1).svg';
import textLogo2 from './Mask group (2).svg';
import textLogo3 from './Mask group (3).svg';

const StyledDiv = styled.div`
    width: 400px;
    height:225px;
    border-radius: 10px;
    /* border: 1px solid; */
    box-shadow: 0px 0px 20px 0px #00000033;

    img {
        margin: 30px 0px 19px 24px;
    }
`
const TextDiv = styled.div`
    font-family: inter;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    width: 359px;
    height: 66px;
    /* border: 1px solid black; */
    margin-left:24px;
`



export default function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Slider style={{ width: 1260}} {...settings}>
            <StyledDiv >
                <img src={textLogo1} alt="logo1" />
                <TextDiv>Высокая и оперативная скорость <br /> обработки заявки</TextDiv>
            </StyledDiv>
            <StyledDiv >
                <img src={textLogo2} alt="logo2" />
                <TextDiv> Огромная комплексная база <br /> данных, обеспечивающая <br />    объективный ответ на запрос</TextDiv>
            </StyledDiv>
            <StyledDiv>
                <img src={textLogo3} alt="logo3" />
                <TextDiv>Защита конфеденциальных сведений, <br /> не подлежащих разглашению по <br /> федеральному законодательству</TextDiv>
            </StyledDiv>
            <StyledDiv >
                <img src={textLogo1} alt="logo1" />
                <TextDiv>Высокая и оперативная скорость <br /> обработки заявки</TextDiv>
            </StyledDiv>
            <StyledDiv >
                <img src={textLogo2} alt="logo2" />
                <TextDiv> Огромная комплексная база <br /> данных, обеспечивающая <br />    объективный ответ на запрос</TextDiv>
            </StyledDiv>
            <StyledDiv >
                <img src={textLogo3} alt="logo3" />
                <TextDiv>Защита конфеденциальных сведений, <br /> не подлежащих разглашению по <br /> федеральному законодательству</TextDiv>
            </StyledDiv>
        </Slider>
    );
}
