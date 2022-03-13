import React from 'react';
import { Box} from '@mui/material';
//import { Carousel } from '@trendyol-js/react-carousel';
import Carousel from 'react-elastic-carousel';
import Item from './achievementcircle';
import Award from '../../image/achievements/awards.png'
import Trophy from '../../image/achievements/trophy.png'
import License from '../../image/achievements/license.png'
import Certificate from '../../image/achievements/certificate.png'

const CarrouselAchievements = () => {

  const cards = [
    {
      name: "Salesforce Certified Administrator",
      image: License,
      type: "Certification",
      date: "January, 2022",
      url: "https://drive.google.com/file/d/1HRhHJ-3u6Ke3-lAewKO9nXQhkWvxaYu1/preview"
    },
    {
      name: "Introduction to Laravel Framework",
      image: Certificate,
      type: "Certificate",
      date: "January, 2022 - February, 2022",
      url: "https://drive.google.com/file/d/14Sr3pToZy5FMyFQBSLf4XSyC2vFoKwN8/preview"
    },
    {
      name: "Module I Agile & Scrum Framework",
      image: Certificate,
      type: "Certificate",
      date: "January, 2022 - February, 2022",
      url: "https://drive.google.com/file/d/1dmf828NQlD3236RLSAlibHnIGzXLqcPG/preview"   
    },
    {
      name: "Excellence Academy 2020",
      image: Award,
      type: "Honors",
      date: "November, 2021",
      url: "https://drive.google.com/file/d/1LWiPYYmdSpTjbW3E8kDJlmJksuyR9HqG/preview"
    },
    {
      name: "Trailhead Bootcamp for New Admins",
      image: Certificate,
      type: "Certificate",
      date: "October, 2021 - November, 2021",
      url: "https://drive.google.com/file/d/1Kn-bjMhr0RdIV3HdFK0fLTGOH5-msVKw/preview"
    },
    {
      name: "User Inteface Design with Adobe XD",
      image: Certificate,
      type: "Certificate",
      date: "July, 2021 - August, 2021",
      url: "https://drive.google.com/file/d/1oeuIWOufeWKzEaHBVQaZ80_FuADjDFSp/preview"
    },
    {
      name: "Excellence Academy 2019",
      image: Award,
      type: "Honors",
      date: "Octuber, 2020",
      url: "https://drive.google.com/file/d/1iY2iAuOmeivJBSAKY2IpfLbH-6IrI-EF/preview"
    },
    {
      name: "Intellectual Production Contest UCA",
      image: Trophy,
      type: "Award",
      date: "May, 2020",
      url: "https://drive.google.com/file/d/1yHJIhP4F8dayWslRMv8lrf188ZcYOcrA/preview"
    }
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2},
    { width: 850, itemsToShow: 3},
    { width: 1150, itemsToShow: 3.5},
    { width: 1450, itemsToShow: 4.5 },
    { width: 1750, itemsToShow: 4.5 },
  ]

  return(
    <Box style={{marginLeft: '0px', marginTop: '20px'}} sx={{ justifyContent: 'center' }}>
      <Carousel itemsToShow={3.5} itemsToScroll={1} focusOnSelect={true} showArrows={false}
        breakPoints={breakPoints}>

        {cards.map((data) => (
          <Item name={data.name} image={data.image} type={data.type}
            date={data.date} url={data.url}/>
        ))}

      </Carousel>
    </Box>
	
  );
  };

  export default CarrouselAchievements;