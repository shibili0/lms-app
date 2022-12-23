import React from "react";
import { Card } from "react-bootstrap";
function ImageCard2({
  card2Title,
  card2color,
  card2content1,
  card2content2,
  hardlevel,
  ...props
}) {
  return (
    <div className="cards">
      <Card style={{ width: "18rem" }} className="cardComp2 rounded">
        <div
          className="cardTitleParent rounded-top"
          style={{ backgroundColor: card2color }}
        >
          <Card.Title variant="top" className="card2title rounded-top">
            <h5 style={{padding:"5px"}}>{card2Title}</h5>
          </Card.Title>
        </div>
        <Card.Body className="card2contentParent">
          <div className="card2content">
            <Card.Text className="card2text" style={{fontSize:"20px"}}>{card2content1}</Card.Text>
            <Card.Text className="card2text" style={{color: hardlevel, fontSize:"20px"}}>{card2content2}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImageCard2;
