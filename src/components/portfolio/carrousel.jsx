import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Item from './projectcircle';
import UniverseHero from '../../image/portfolio/Icons/UniverseHero.jpeg'
import RolyKermesse from '../../image/portfolio/Icons/RolyKermesse.png'
import iCareAboutU from '../../image/portfolio/Icons/iCareAboutU.png'
import AttentipRecipes from '../../image/portfolio/Icons/AttentipRecipes.png'
import Pokedex from '../../image/portfolio/Icons/Pokedex.png'
import MygroKermesse from '../../image/portfolio/Icons/MygroKermesse.png'
import MichiApp from '../../image/portfolio/Icons/MichiApp.png'
import CompuTecno from '../../image/portfolio/Icons/CompuTecno.png'
import PPP from '../../image/portfolio/Icons/PPP.png'
import GrandmaGarden from '../../image/portfolio/Icons/GrandmaGarden.png'
import MyProfile from '../../image/portfolio/Icons/MyProfile.png'

const CarrouselPortfolio = () => {

  const cards = [
    {
      name: "Attentip Recipes",
      image: AttentipRecipes
    },
    {
      name: "i Care About U",
      image: iCareAboutU
    },
    {
      name: "Pokedex",
      image: Pokedex
    },
    {
      name: "Roly Kermesse",
      image: RolyKermesse
    },
    {
      name: "Mygro Kermesse",
      image: MygroKermesse
    },
    {
      name: "Michi App",
      image: MichiApp
    },
    {
      name: "Computecno Project",
      image: CompuTecno
    },
    {
      name: "Universe Hero",
      image: UniverseHero
    },
    {
      name: "Grandma's Garden",
      image: GrandmaGarden
    },
    {
      name: "Internships Management",
      image: PPP
    },
    {
      name: "My Profile",
      image: MyProfile
    }
  ];
  return(
    <div style={{marginLeft: '0px', marginTop: '20px'}}>

      <Carousel show={6.5} swiping={true} slide={3} leftArrow={false} rightArrow={false}>
        {cards.map((data) => (
          <Item name={data.name} image={data.image}/>
        ))}
      </Carousel>

    </div>
	
  );
  };

  export default CarrouselPortfolio;