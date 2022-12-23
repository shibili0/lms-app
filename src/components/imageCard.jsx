import React from "react";
import { Card } from "react-bootstrap";
function ImageCard({ textContent, imgSrc, ...props }) {
  return (
    <div className="cardStyle1">
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src={imgSrc} className="cardImage" />
        <Card.Body className="cardText">
          <Card.Text className="cardText" style={{fontSize:"18px", fontWeight:"400"}}>{textContent}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImageCard;
