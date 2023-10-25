import React from "react";
import styled from "styled-components";
import doc from './Document.svg';
import folders from './Folders.svg';
import rocket from './Group 1171274244.svg'
import SearchPageTable from "./searchPageTable";
const ContentDiv = styled.div`
    width:1380px;
    height:892px;
    position:relative;
    padding-left: 60px;
    border:1px solid green;
    img {
        position:absolute;
        margin: -472px 0 0 989px;
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
`
const SearchPanel = styled.div`
    width:872px;
    height:543px;
    font-family:inter;
    font-size:18px;
    border:1px solid red;
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