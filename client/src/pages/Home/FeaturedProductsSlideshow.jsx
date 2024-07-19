// import React from 'react';

// export const FeaturedProductsSlideshow = () => {
  //  const images = [
  //      "/assets/images/braclet.jpg",
  //      "/assets/images/bangle.jpg",
  //      "/assets/images/earring.jpg"
  //  ];

  

//     return (
//         <>
//         </>
//     );
// };





import './featured3dComponents/mainFile.css'
import { v4 as uuidv4 } from "uuid";
import Card from "./featured3dComponents/Card";
import Carousel from "./featured3dComponents/Carousel";

export const FeaturedProductsSlideshow = ()=> {

  const images = [
    "/assets/images/braclet.jpg",
    "/assets/images/bangle.jpg",
    "/assets/images/earring.jpg"
];


let cards = [
  {
    key: uuidv4(),
    content: (
      <Card imagen="/assets/images/braclet.jpg"/>
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="/assets/images/bangle.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="/assets/images/earring.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="/assets/images/braclet.jpg"/>
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="/assets/images/bangle.jpg" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card imagen="/assets/images/earring.jpg" />
    )
  }
];
 

  return (
    <div className="flex justify-center md:px-0 px-8 bg-black ">
      <Carousel
        cards={cards}
        height="600px"
        width="70%"
        margin="0 50"
        offset={7}
        showArrows={false}
      />

      <div>

      </div>
    </div>
  );
}





