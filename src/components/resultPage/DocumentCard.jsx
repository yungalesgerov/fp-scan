import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ResultPage.css";
import example from "./screen.svg";

function DocumentCard({
  cardInfo: { date, link, title, badge, text, articleLink, words },
}) {
  return (
    <Card className="result-card">
      <Card.Body>
        <div class="test">
          <div className="result-card__head">
            <p className="result-card__head-text">{date}</p>
            <Card.Link href="#" className="result-card__head-text">
              {link}
            </Card.Link>
          </div>
          <Card.Title className="result-card__title mb-3">{title}</Card.Title>
          <div className="result-card__tag mb-3">
            <Card.Text>{badge}</Card.Text>
          </div>
          <Card.Img src={example}></Card.Img>
          <Card.Text className="result-card__text my-3">{text}</Card.Text>
        </div>
        <div className="result-card__footer">
          <Button className="result-card-button my-3">
            <a href={articleLink} target="_blank">
              Читать в источнике
            </a>
          </Button>
          <p className="result-card__head-text">{words} слова</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DocumentCard;