import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
//import Carousel from 'react-elastic-carousel';
import Item from './portfolio/projectcircle';
import { Button } from '@mui/material';
import Profile from '../image/portfolio/sample.jpg'
import Profile2 from '../image/portfolio/sample.jpg'
import RightArrow from '../image/utils/right-arrow.png'
//import { Swiper, SwiperSlide } from "swiper/react";


const Test = () => {

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
    <div style={{marginInline: '20px', marginTop: '20px'}}>

      <div maxwidth="xl">
        {/* <Swiper slidesPerView={5.5}
          spaceBetween={8}
          loop={true}
          scrollbar={false}
          breakpoints={{
            475: {
              slidesPerView: 2.5
            },
            640: {
              slidesPerView: 3.5
            },
            768: {
              slidesPerView: 4.5
            },
            1024: {
              slidesPerView: 5.5
            },
            1280: {
              slidesPerView: 6.5
            }
          }}>

            {cards.map((data) => (
              <SwiperSlide>
                <Item name={data.name} image={data.image}/>
              </SwiperSlide>
            ))}
          
        </Swiper> */}
      </div>

     
    </div>
	
  );
  };

  export default Test;