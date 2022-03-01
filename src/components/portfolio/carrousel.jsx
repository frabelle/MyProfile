import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Item from './projectcircle';
import Videos from '../../image/portfolio/Icons/video.png'
import RolyKermesse from '../../image/portfolio/Icons/RolyKermesse.jpg'
import iCareAboutU from '../../image/portfolio/Icons/iCareAboutU.png'
import AttentipRecipes from '../../image/portfolio/Icons/AttentipRecipes.png'
import Pokedex from '../../image/portfolio/Icons/Pokedex.png'
import MygroKermesse from '../../image/portfolio/Icons/MygroKermesse.png'
import MichiApp from '../../image/portfolio/Icons/MichiApp.png'
import CompuTecno from '../../image/portfolio/Icons/CompuTecno.png'
import PPP from '../../image/portfolio/Icons/PPP.png'
import GrandmaGarden from '../../image/portfolio/Icons/GrandmaGarden.png'
import MyProfile from '../../image/portfolio/Icons/MyProfile.png'
import RolyLab from '../../image/portfolio/Icons/RolyLab.png'

import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const CarrouselPortfolio = () => {

  const cards = [
    {
      name: "Attentip Recipes",
      image: AttentipRecipes,
      url:"https://github.com/frabelle/AttentipRecipes",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>
    },
    {
      name: "Attentip - i Care About U",
      image: iCareAboutU,
      url:"https://github.com/frabelle/Attentip_iCareAboutU",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>
    },
    {
      name: "Pokedex",
      image: Pokedex,
      url:"https://github.com/frabelle/Pokedex",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>
    },
    {
      name: "Michi App",
      image: MichiApp,
      url:"https://github.com/frabelle/MichiApp",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>
    },
    {
      name: "Videos Creation",
      image: Videos,
      url:"",
      source: "Watch this on YouTube",
      sourceIcon: <YouTubeIcon/>
    },
    {
      name: "Roly Kermesse",
      image: RolyKermesse,
      url:"https://github.com/frabelle/Rolykermesse",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>
    },
    {
      name: "Mygro Kermesse",
      image: MygroKermesse,
      url:"https://github.com/frabelle/Mygrokermesse",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>
    },
    {
      name: "Computecno Project",
      image: CompuTecno,
      url:"https://github.com/frabelle/ComputecnoProject",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>
    },
    {
      name: "RolyLab",
      image: RolyLab,
      url:"https://github.com/frabelle/RolyLab",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>
    },
    {
      name: "Grandma's Garden",
      image: GrandmaGarden,
      url:"",
      source: "Let's check this closer",
      sourceIcon: <CloudCircleIcon/>
    },
    {
      name: "Internships Management",
      image: PPP,
      url:"",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>
    },
    {
      name: "My Profile",
      image: MyProfile,
      url:"",
      source: "Thank you to get until here. Hope you liked my website!",
      sourceIcon: <VolunteerActivismIcon/>
    }
  ];

  return(
    <div style={{marginLeft: '0px', marginTop: '20px'}}>

      <Carousel show={6.5} swiping={true} slide={3} 
        leftArrow={false} rightArrow={false} responsive={true}>
        {cards.map((data) => (
          <Item name={data.name} image={data.image} source={data.source} sourceIcon={data.sourceIcon}
            url={data.url}/>
        ))}
      </Carousel>

    </div>
	
  );
  };

  export default CarrouselPortfolio;