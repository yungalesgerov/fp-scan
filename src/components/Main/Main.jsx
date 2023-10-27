import React from "react";
import styled from 'styled-components'
import mainImg1 from './Group 13.svg';
import mainImg2 from './Group 14.svg';
import arrowRight from './icons8-шеврон-вправо-90 1.svg';
import arrowLeft from './icons8-шеврон-вправо-90 2.svg';
import cardLogo1 from './Group 1171274214.svg';
import cardLogo2 from './Group 1171274215.svg';
import cardLogo3 from './Group 1171274216.svg';
import check from './icons8-галочка-96 4.svg';
import SimpleSlider from '../SimpleSlider/SimpleSLider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../index.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../jsAdditions/userSlice";
import mediaImg from './media.svg';

const Button = styled.button`
    cursor:pointer;
    background-color: ${props => props.auth ? '#D2D2D2' : '#5970FF'};
    border: none;
    height: 59px;
    width : 355px;
    color:${props => props.auth ? '#000' : '#fff'}; 
    font-family: inter;
    margin-left: 30px;
    font-size:20px;
    border-radius:5px;
`

const MainWrapper = styled.div`
    width: 1440px;
    /* height: 2637px; */
    height:100%;
    /* border: 1px solid red; */
    display: flex;
    flex-wrap:wrap;
    align-content: space-around;
    @media screen and (max-width:376px) {
        width:375px;
    }
`
const Title = styled.h1`
    width:743px;
    height: 288px;
    /* background-color: red; */
    font-family: ferry_black;
    font-size: 60px;
    line-height: 72px;
    font-weight: 900;
    margin: 0;
    padding: 0;
    &.title2 {
        height:54px;
        font-size:45px;
    }
    @media screen and (max-width:376px) {
        width:361px;
        height:136px;
        font-size:28px;
        line-height:33.6px;
        margin-left:14px; 
        /* .title2 {
            margin-top:26px;
        } */
    }
`

const ContentDiv = styled.div`
    width: 1320px;
    /* border : 1px solid grey; */
    margin: 0 auto;
    position:relative;
    &:nth-child(1) {
        display:flex;
        height:620px;
    }
    &:nth-child(2) {
        margin-bottom:70px;
    }
    &:nth-child(3) {
        height: 575.52px;
        width: 1307px;
        margin-bottom:100px;

    }
    &:nth-child(4) {
        width:1320px;
        height:664px;
        margin-bottom:40px;
        .cards {
            display:flex;
        }
    }

    
    .headerCard {
        position: relative;
        width:415px;
        height:132px;
        /* border: 1px solid green; */
        h2 {
            margin: 30px 0 10px 30px ;
            width:131px;
            height:36px;
        }
        img {
            margin:-89px 0 0 307px;
            position:absolute;
        }
    }
    .headerCardText {
        width:313px;
        height:22px;
    }
    .cards {
        margin-top:70px;
        width: 1320px;
        height:540px;
        /* border: 1px solid brown; */
        justify-content: space-between;
    }
    .card-item {
        width:415px;
        height:540px;
        /* border: 2px solid black; */
        font-family: inter;
    }
    .currentPrice {
        width:113px;
        height:36px;
        font-size:30px;
        line-height:36.31px;
        margin: 33px 0 10px 30px;
        
    }
    .oldPrice {
        width:97px;
        height:30px;
        font-size:22px;
        /* border: 1px solid black; */
        color: grey;
        text-decoration: line-through;
        margin: 33px 0 0 19px;
    }
    .currentTarif {
        width:134px;
        height:24px;
        background-color:#3BA5E0;
        font-size: 14px;
        border-radius:10px;
        line-height: 17px;
        margin: 12px 0 0 70px;
        color: #fff;
        span {
            margin: 0px 0px  0px 4px;
        }
    }
    @media screen and (max-width:376px) {
        &:nth-child(1) {
            height:700px;
            flex-direction:column;
            .mainImg {
                width:347px;
                height:342px;
                margin:0;
                top: 200px;
            }
        }
        &:nth-child(2) {
            margin-top:55px;
            h1 {
                font-size:28px;
                width:274px;
            }
            div {
                margin-top:0;
                width:298px;
            }
        }
        &:nth-child(3) {
            width:360px;
            height:392px;
            background-image:url(${mediaImg});

            img {
                width:100%;
                height:100%;
                display:none;
            }
        }
        &:nth-child(4) {
            width:360px;
            height:1650px;
            margin-bottom:70px;
            .cards {
                flex-direction:column;
                width:335px;
                .card-item {
                    width:335px;
                    height:512px;
                    margin-bottom:30px;

                    .headerCard {
                        width:335px;
                        div {
                            width:285px;
                            height:22px;
                            font-size:15px;
                        }
                        img {
                            margin-left:240px;
                        }
                    }
                    div:nth-child(2) {
                        button {
                            width:286px;
                            margin-top:-10px;
                        }
                        .currentPrice {
                            width:114px;
                            font-size:25px;
                        }
                        .oldPrice {
                            font-size:16px;
                        }
                        .currentTarif {
                            font-size:10px;
                        }
                        .tarif-credit {
                            width:273px;
                            border:none;
                        }
                        .tarifInfo {
                            width:310px;
                            margin-bottom:20px;
                        }
                    }
                }
            }
        }
        .heroDiv {
            button {
                width:335px;
                margin:32px 0 26px 14px;
            }
        }

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

    &.titleSub {
        margin-top: 20px;
        margin-bottom:70px;
        margin-left:0px;
        width: 534px;
        height:48px;
    }
    &.tarifInfo {
        width:366px;
        height:110px;
        margin-bottom:55px;
        &span {
            margin-top:-2px;
        }
    }
    &.tarif-credit {
        width:371px;
        height:22px;
        margin-bottom: 59px;
    }
    @media screen and (max-width:376px) {
        &.titleSub {
            width:327px;
            height:66px;
            margin:19px 0 0 14px;
            font-size:17px;
        }
    }
`

const Main = ({ auth }) => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    return (
        <MainWrapper>
            <ContentDiv >
                <div className="heroDiv"  >
                    <Title style={{marginTop: 45 }} > сервис по поиску
                        <br /> публикаций
                        <br /> о компании
                        <br />по его ИНН
                    </Title>
                    <TextDiv className="titleSub" >
                        Комплексный анализ публикаций, получение данных <br /> в формате PDF на электронную почту.
                    </TextDiv>
                    <Button
                        style={{ fontSize: 22, opacity: user ? 1 : 0.5 }}
                        disabled={user ? false : true}
                        onClick={() => navigate('/search')}
                    >Запросить данные
                    </Button>
                </div>
                <img src={mainImg1} className="mainImg" alt="mainImg1" />
            </ContentDiv>
            <ContentDiv style={{ height: 349, width: 1346 }} >
                <Title className="title2" >Почему именно мы</Title>
                <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 70 }}>
                    <img src={arrowRight} alt="arrow" />
                    <SimpleSlider />
                    <img src={arrowLeft} alt='arrow' />
                </div>
            </ContentDiv >
            <ContentDiv>
                <img src={mainImg2} alt='mainimg2' />

            </ContentDiv>
            <ContentDiv      >
                <Title className="title2"> наши тарифы </Title>
                <div className="cards">
                    <div className="card-item card-item1">
                        <div className="headerCard" style={{ backgroundColor: '#FFB64F' }} >
                            <h2 >Beginner</h2>
                            <TextDiv className="headerCardText">Для небольшого исследования</TextDiv>
                            <img style={{ position: 'absolute' }} src={cardLogo2} alt="cardLogo2" />
                        </div>
                        <div>
                            <div style={{ display: "flex" }}>
                                <div className="currentPrice">799 ₽</div>
                                <div className="oldPrice">1 200 ₽</div>
                                <div className="currentTarif"> <span>Текущий тариф</span></div>
                            </div>
                            <TextDiv className='tarif-credit'>или 150 ₽/мес. при рассрочке на 24 мес.</TextDiv>
                            <TextDiv className="tarifInfo">
                                <h3 style={{ margin: 0 }}>В тариф входит: </h3>
                                <div style={{ marginTop: 10 }}>
                                    <img src={check} alt="check" /><span>Безлимитная история запросов</span>
                                    <br /><img src={check} alt="check" /><span>Безопасная сделка</span>
                                    <br /><img src={check} alt="check" /><span>Поддержка 24/7</span>
                                </div>

                            </TextDiv>
                            {auth ? <Button auth>Перейти в личный кабинет</Button> : <Button>Подробнее</Button>}
                        </div>
                    </div>
                    <div className="card-item card-item2">
                        <div className="headerCard" style={{ backgroundColor: '#7CE3E1' }} >
                            <h2 >Pro</h2>
                            <TextDiv className="headerCardText">Для HR и фрилансеров</TextDiv>
                            <img  src={cardLogo3} alt="cardLogo3" />
                        </div>
                        <div>
                            <div style={{ display: "flex" }}>
                                <div className="currentPrice">1 299 ₽</div>
                                <div className="oldPrice">2 600 ₽</div>
                            </div>
                            <TextDiv className='tarif-credit'>или 279 ₽/мес. при рассрочке на 24 мес.</TextDiv>
                            <TextDiv className="tarifInfo">
                                <h3 style={{ margin: 0 }}>В тариф входит: </h3>
                                <div style={{ marginTop: 10 }}>
                                    <img src={check} alt="check" /><span>Все пункты тарифа Beginner</span>
                                    <br /><img src={check} alt="check" /><span>Экспорт истории</span>
                                    <br /><img src={check} alt="check" /><span>Рекомендации по приоритетам</span>
                                </div>

                            </TextDiv>
                            <Button>Подробнее</Button>
                        </div>
                    </div>
                    <div className="card-item card-item3">
                        <div className="headerCard" style={{ backgroundColor: '#000000', color: '#fff' }} >
                            <h2 >Business</h2>
                            <TextDiv className="headerCardText">Для корпоративных клиентов</TextDiv>
                            <img style={{ position: 'absolute' }} src={cardLogo1} alt="cardLogo2" />
                        </div>
                        <div>
                            <div style={{ display: "flex" }}>
                                <div className="currentPrice">2 379 ₽</div>
                                <div className="oldPrice">3 700 ₽</div>
                            </div>
                            <TextDiv className='tarif-credit' ></TextDiv>
                            <TextDiv className="tarifInfo">
                                <h3 style={{ margin: 0 }}>В тариф входит: </h3>
                                <div style={{ marginTop: 10 }}>
                                    <img src={check} alt="check" /><span>Безлимитная история запросов</span>
                                    <br /><img src={check} alt="check" /><span>Безопасная сделка</span>
                                    <br /><img src={check} alt="check" /><span>Поддержка 24/7</span>
                                </div>

                            </TextDiv>
                            <Button>Подробнее</Button>
                        </div>
                    </div>

                </div>

            </ContentDiv>
        </MainWrapper>
    )

}
export default Main;