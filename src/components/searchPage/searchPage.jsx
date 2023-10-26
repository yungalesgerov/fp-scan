import React from "react";
import styled from "styled-components";
import doc from './Document.svg';
import folders from './Folders.svg';
import rocket from './Group 1171274244.svg';
import './SearchPage.css';
import SearchPageTable from "./searchPageTable";
const ContentDiv = styled.div`
    width:100%;
    height:100%;
    position:relative;
    padding-left: 60px;
    border:1px solid green;
    img {
        position:absolute;
        margin: -472px 0 0 920px;
    }
    .searchDiv {
        width:1298px;
        height:214px;
        border:1px solid black;
        span {
            width:534px;
            height:48px;
            font-size:20px;
            line-height:24.2px;
            font-family:inter;


        }
        img:last-child {
            margin:-60px 0 0 730px;
        }
        .doc {
            margin: -80px 0 0 470px;
        }
        
    }
    @media screen and (max-width:376px) {
        padding:0;
        .searchDiv {
            position:relative;
            width:361px;
            height:262px;
            h1 {
                width:100%;
                height: 136px;
                font-size:28px;
                line-height:33.6px;
            }
            span {
                width:100%;
                height:66px;
                font-size:18px;
                line-height:22px;
            }
            img:last-child {
                display:none;
            }
            .doc {
                width:58px;
                height:58px;
                position:absolute;
                margin:-120px 0 0 250px;
            }
        }
       img {
        margin:0 0 0 0px;
        position:relative;
        width:370px;
        height:403px;
       } 
    }
`
const SearchPanel = styled.div`
    width:872px;
    height:543px;
    font-family:inter;
    font-size:18px;
    border:1px solid red;
    @media screen and (max-width:376px) {
        width:100%;
        height:650px;
        .checkDiv {
            display:none;
        }
    }
`
const Title = styled.h1`
    width:817px;
    height: 96px;
    /* background-color: red; */
    font-family: ferry_black;
    font-size: 40px;
    line-height: 48px;
    font-weight: 900;
    margin: 45px 0 25px 0px;
    padding: 0;
    border:1px solid red;
`

const SearchPage = () => {

    return (
        <ContentDiv>
            <div className="searchDiv">
                <Title>Найдите необходимые <br /> данные в пару кликов.</Title>
                <span>Задайте параметры поиска. <br /> Чем больше заполните, тем точнее поиск</span>
                <img className="doc" src={doc} alt="document" />
                <img src={folders} alt="folders" />
            </div>
            <SearchPanel >
                <SearchPageTable />
            </SearchPanel>
            <img src={rocket} alt="rocket" />
        </ContentDiv>


    )

}

export default SearchPage;