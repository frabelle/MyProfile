import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Item from './portfolio/projectcircle';
import Profile from '../image/portfolio/sample.jpg'
import Profile2 from '../image/portfolio/sample.jpg'

const CarrouselAchievements = () => {

  const cards = [
    {
      name: "Hola",
      image: Profile
    },
    {
      name: "Hola2",
      image: Profile2
    },
    {
      name: "Hola3",
      image: Profile
    },
    {
      name: "Hola4",
      image: Profile2
    },
    {
      name: "Hola5",
      image: Profile
    },
    {
      name: "Hola6",
      image: Profile2
    },
    {
      name: "Hola7",
      image: Profile
    },
    {
      name: "Hola8",
      image: Profile2
    }
  ];
  return(
    <div style={{marginLeft: '40px', marginTop: '20px'}}>
      <Carousel show={6.5} swiping={true} slide={3} leftArrow={false} rightArrow={false}>
        {cards.map((data) => (
          <Item name={data.name} image={data.image}/>
        ))}
      </Carousel>
    </div>
	
  );
  };

  export default CarrouselAchievements;