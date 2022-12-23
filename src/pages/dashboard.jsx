import React from "react";
import ImageCard from "../components/imageCard";
import Heading from "../components/heading";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchBar";

function Dashboard() {
  const cardValues = [
    { imageUrl: require("../images/java.jpeg"), content: "Java Course" },
    { imageUrl: require("../images/python.jpg"), content: "Python Course" },
  ];
  const inProgress= [
    { imageUrl: require("../images/java.jpeg"), content: "Java Course" },

  ];
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Heading title="In Progress"/>
      <div>
        <div className="cards">
          {inProgress.map((card) => (
            <ImageCard imgSrc={card.imageUrl} textContent={card.content} />
          ))}
        </div>
      </div>
      <Heading title="Recommended"/>
      <div>
        <div className="cards">
          {cardValues.map((card) => (
            <ImageCard imgSrc={card.imageUrl} textContent={card.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
