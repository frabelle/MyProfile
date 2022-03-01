import React from 'react';
import { Box, Grid} from '@mui/material';
//import { Carousel } from '@trendyol-js/react-carousel';
import Carousel from 'react-elastic-carousel';
import Test from '../../image/portfolio/sample.jpg'
import Trophy from '../../image/achievements/trophy.png'
import License from '../../image/achievements/license.png'
import Certificate from '../../image/achievements/certificate.png'

export default function DialogCarouselProject (props){

  const cards = [
    {
      name: "Salesforce Certified Administrator",
      image: Test,
    },
    {
      name: "Salesforce Certified Administrator",
      image: Test,
    }

  
  ];

  return(
    <div>
      <Carousel itemsToShow={1} itemsToScroll={1} focusOnSelect={true} showArrows={false}>

        {cards.map((data) => (
           <img
           src={data.image}
           width='100%'   
           alt="this is a image test"/>
        ))}

      </Carousel>
    </div>
	
  );
  };
