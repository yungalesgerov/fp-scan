import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./ResultPage.css";
import result_icon from "./result_icon.svg";
import ResultPageSlider from "./ResultPageSlider";
import DocumentCard from "./DocumentCard";
import { selectData } from "../../jsAdditions/histogramsSlice";
import { selectHistograms } from "../../jsAdditions/histogramsSlice";
import { getCardsData } from "../../jsAdditions/getCardsData";

function ResultPage() {
  const resultData = useSelector(selectData);
  const ids = resultData.items.map((item) => item.encodedId);
  const initialCardsCount = 10;

  const [cardsData, setCardsData] = useState([]);
  const [cardsCount, setCardsCount] = useState(initialCardsCount);

  const handleMoreImage = () => {
    getCardsData(ids.slice(cardsCount, cardsCount + initialCardsCount)).then(
      (data) => {
        setCardsData([...cardsData, ...data]);
        setCardsCount(cardsCount + initialCardsCount);
      }
    );
  };

  useEffect(() => {
    getCardsData(ids.slice(0, cardsCount)).then((data) => {
      setCardsData(data);
    });
  }, []);

  const renderCards = () =>
    cardsData.map((card, index) => {
      const data = card.ok;
      const dataAttributes = data.attributes;
      const xmlString = data.content.markup;
      const parser = new DOMParser();
      const xmlDocument = parser.parseFromString(xmlString, "application/xml");
      const sentences = xmlDocument.getElementsByTagName("sentence");
      const text = Array.from(sentences).reduce((acc, sentence) => {
        return (
          acc + sentence.textContent.trim().replaceAll(/<[^>]*>/g, "") + " "
        );
      }, "");

      const badgeTypes = {
        isAnnouncement: "announcements",
        isDigest: "news",
        isTechNews: "technews",
      };
      const badgeType = Object.keys(badgeTypes).find(
        (type) => dataAttributes[type]
      );
      const badge = badgeType ? badgeTypes[badgeType] : "тег публикации";

      const dateString = data.issueDate;
      const date = new Date(dateString);
      const formattedDate = date
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .split("/")
        .join(".");

      const cardInfo = {
        date: formattedDate,
        link: data.source.name,
        title: data.title.text,
        badge: badge,
        text: text,
        articleLink: data.url,
        words: dataAttributes.wordCount,
      };

      return (
        <div key={index} className="document-card-container">
          <DocumentCard cardInfo={cardInfo} />
        </div>
      );
    });


    const dataHistograms = useSelector(selectHistograms);
    const totalDocs = dataHistograms[0];
    const variantsCount = totalDocs.data.length;


  return (
    <div className="result-page">
      <div className="result-page__container">
        <div className="result-page__top-container">
          <div className="result-page__title-box">
            <h2 className="result-page__title">
              ИЩЕМ.СКОРО <br /> БУДУТ РЕЗУЛЬТАТЫ
            </h2>
            <p className="result-page__subtitle">
              Поиск может занять некоторое время,
              <br /> просим сохранять терпение.
            </p>
          </div>
          <div className="result-page__icon">
            <img className="result-page__icon" src={result_icon}></img>
          </div>
        </div>
        <div className="result-page__mid-container">
          <div className="result-page__title-box">
            <h3 className="result-page__mid-title pb-2">ОБЩАЯ СВОДКА</h3>
            <p className="result-page__result-subtitle">
              Найдено {variantsCount} вариантов
            </p>
          </div>
          <ResultPageSlider />
        </div>
        <h3 className="result-page__mid-title mb-5">СПИСОК ДОКУМЕНТОВ</h3>
        <div className="result-page__cards-container mb-5">{renderCards()}</div>
        <div className="result-page__button-box">
          {cardsData.length < ids.length && (
            <Button
              className="load-cards__button mt-4"
              onClick={handleMoreImage}
            >
              Показать больше
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;