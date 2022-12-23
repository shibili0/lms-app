import React from 'react'
import ImageCard from '../components/imageCard';
import Heading from '../components/heading';
import Navbar from "../components/navbar";
import SearchBar from "../components/searchBar";
function Courses() {
  const design= [
    { imageUrl: require("../images/java.jpeg"), content: "Java Course" },

  ];
  const cardValues = [
    
    { imageUrl: require("../images/python.jpg"), content: "Python Course" },
    { imageUrl: require("../images/java.jpeg"), content: "Java Course" },
    { imageUrl: require("../images/react.jpeg"), content: "React Course" },
  ];
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Heading title="Programming"/>
      <div>
        <div className="cards">
          {cardValues.map((card) => (
            <ImageCard imgSrc={card.imageUrl} textContent={card.content} />
          ))}
        </div>
      </div>
      <Heading title="Design"/>
      <div>
        <div className="cards">
          {design.map((card) => (
            <ImageCard imgSrc={card.imageUrl} textContent={card.content} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses