import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Item from './projectcircle';

import Videos from '../../image/portfolio/Icons/video.png'
import VideoSample from '../../image/portfolio/samples/VideoSample.gif'

import SistemaAdmision from '../../image/portfolio/Icons/SistemaAdmision.png'
import SistemaAdmisionSample from '../../image/portfolio/samples/SistemaAdmisionSample.png'

import PurrfectHaven from '../../image/portfolio/Icons/PurrfectHaven.png'
import PurrfectHavenSample from '../../image/portfolio/samples/PurrfectHavenSample.png'

import RolyKermesse from '../../image/portfolio/Icons/RolyKermesse.jpg'
import RolyKermesseSample from '../../image/portfolio/samples/RolyKermesse.gif'

import iCareAboutU from '../../image/portfolio/Icons/iCareAboutU.png'
import iCareAboutUSample from '../../image/portfolio/samples/iCareAboutU.gif'

import AttentipRecipes from '../../image/portfolio/Icons/AttentipRecipes.png'
import AttentipRecipesSample from '../../image/portfolio/samples/AttentipRecipes.gif'

import Pokedex from '../../image/portfolio/Icons/Pokedex.png'
import PokedexSample from '../../image/portfolio/samples/Pokedex.gif'

import MygroKermesse from '../../image/portfolio/Icons/MygroKermesse.png'
import MygroKermesseSample from '../../image/portfolio/samples/MygroKermesse.gif'

import MichiApp from '../../image/portfolio/Icons/MichiApp.png'
import MichiAppSample from '../../image/portfolio/samples/MichiApp.gif'

import CompuTecno from '../../image/portfolio/Icons/CompuTecno.png'
import CompuTecnoSample from '../../image/portfolio/samples/ComputecnoVideo.gif'

import PPP from '../../image/portfolio/Icons/PPP.png'
import PPPSample from '../../image/portfolio/samples/PPPSample.gif'

import GrandmaGarden from '../../image/portfolio/Icons/GrandmaGarden.png'
import GrandmaGardenSample from '../../image/portfolio/samples/GrandmaGarden.gif'

import MyProfile from '../../image/portfolio/Icons/MyProfile.png'
import MyProfileSample from '../../image/portfolio/samples/MyProfileSample.gif'

import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const CarrouselPortfolio = () => {

  const cards = [
    {
      name: "🐱 Purrfect Haven",
      image: PurrfectHaven,
      url: "https://purrfecthaven-dev-ed.develop.my.site.com/s/",
      source: "Visit the site",
      sourceIcon: <CloudCircleIcon/>,
      description1: "Project developed as part of a workshop I led for the community about Salesforce. In this session, I guided participants in building a portal using Experience Cloud, where users could adopt kittens or request information through Screen Flows.",
      description2: "Some key features include: automation with Flows, managing potential adopters in Sales Cloud, and setting up interactive forms in Experience Cloud.",
      sample: <img src={PurrfectHavenSample} width='100%' alt="PurrfectHavenSample"/>,
    },
    {
      name: "🎓 Student Admission System",
      image: SistemaAdmision,
      url: "https://uli4-dev-ed.develop.my.site.com/",
      source: "Visit the site",
      sourceIcon: <CloudCircleIcon/>,
      description1: "Project developed for my thesis, where I designed a self-service portal to manage student admissions at an academic institution. Implemented using Salesforce Experience Cloud and Education Architecture (EDA), this system allows students to submit enrollment forms online and receive automated responses.",
      description2: "Some key features include: integration with Salesforce Flows to automate data collection, digitization of the admission process, and centralized information management in Sales Cloud.",
      sample: <img src={SistemaAdmisionSample} width='100%' alt="SistemaAdmisionSample"/>,
    },
    {
      name: "🥗 Attentip Recipes",
      image: AttentipRecipes,
      url: "https://github.com/frabelle/AttentipRecipes",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: "A mobile application where you can discover amazing recipes and learn more about the predominant cuisines of different countries worldwide. This app was developed using Kotlin and leverages the spoonacular.com/food-api service to gather and display food-related information.",
      description2: "Some features in this app include: SQLite local database, Dependency Injection, Repository Factory, Singleton, REST APIs, MVVM/MVI Architectural Pattern, Offline Connection, Uniflow, Fragments, and Navigation Graph.",
      sample: <img src={AttentipRecipesSample} width='100%' alt="AttentipRecipesSample"/>,
    },
    {
      name: "🏋️‍♀ i Care About U",
      image: iCareAboutU,
      url: "https://github.com/frabelle/Attentip_iCareAboutU",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: "An Android application that provides exercises for active breaks, categorized into physical and mental activities. This was a group project developed as a final university assignment. The app was built using Java.",
      description2: "Some features in this app include: Fragments, Material Design, Shared Preferences, Topbar & Bottombar, Glide.",
      sample: <img src={iCareAboutUSample} width='100%' alt="iCareAboutUSample"/>,
    },
    {
      name: "🕹 Pokedex",
      image: Pokedex,
      url: "https://github.com/frabelle/Pokedex",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: "A mobile application for Android inspired by Pokémon. This app displays information about 10 predefined Pokémon. The main objective of this project was to learn how Fragments and Dialog Fragments work. When selecting a Pokémon, a window opens with more detailed information about it. Developed using Java.",
      description2: "Some features in this app include: Fragments, Material Design, Shared Preferences, Topbar, Dialog Fragment, and RecyclerView.",
      sample: <img src={PokedexSample} width='100%' alt="PokedexSample"/>
    },
    {
      name: "😺 Michi App",
      image: MichiApp,
      url: "https://github.com/frabelle/MichiApp",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: "One of my favorite applications! A mobile app that provides information about all existing cat breeds. By clicking on a card, users can view detailed breed information, along with a hyperlink redirecting them to an external site for more comprehensive details.",
      description2: "Developed using Kotlin and powered by docs.thecatapi.com. Some features include: SQLite Local DB, Singleton, MVVM/MVI, Offline Connection, Uniflow, and Dialog Fragment.",
      sample: <img src={MichiAppSample} width='100%' alt="MichiAppSample"/>
    },
    {
      name: "📹 COVID Video Contest",
      image: Videos,
      url: "https://youtu.be/nD-2Y1_wOQo",
      source: "Watch my video on YouTube",
      sourceIcon: <YouTubeIcon/>,
      description1: "Universidad Centroamericana organized a contest where students from various fields could share their ideas for possible solutions to the challenges brought by the pandemic. I took the courage to participate, even though I am not an expert in video editing. However, I truly enjoy it and see it more as a hobby.",
      description2: "To my surprise, I won **first place** in this competition. At first, I never imagined that something I considered a hobby could turn into something I was actually good at.",
      sample: <img src={VideoSample} width='100%' alt="VideoSample"/>
    },
    {
      name: "⛪ Roly Kermesse",
      image: RolyKermesse,
      url: "https://github.com/frabelle/Rolykermesse",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: "This project is part of a university assignment aimed at facilitating the management of a kermesse event. It includes a Cash Register module, which allows for tracking cash audits, currency management, denominations, and exchange rates.",
      description2: "This web application was developed using PHP for the backend and Bootstrap for the frontend. Some of its implementations include MVC architecture, JAlert, Select2, AJAX, and FontAwesome.",
      sample: <img src={RolyKermesseSample} width='100%' alt="RolyKermesseSample"/>
    },
    {
      name: "⛪ Mygro Kermesse",
      image: MygroKermesse,
      url: "https://github.com/frabelle/Mygrokermesse",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: "This project is part of a university assignment designed to facilitate the management of a kermesse event. It includes a Cash Register module that enables the management of cash audits, currencies, denominations, and exchange rates. Additionally, it features a section for generating reports on specific modules and auditing kermesse activities and revenues.",
      description2: "This web application was developed using C# with the .NET framework. The frontend was built using Bootstrap 5, and Report Builder was used for report creation and generation.",
      sample: <img src={MygroKermesseSample} width='100%' alt="MygroKermesseSample"/>
    },
    {
      name: "💻 Computecno Project",
      image: CompuTecno,
      url:"https://github.com/frabelle/ComputecnoProject",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: 'Este fue uno de los primeros proyectos que realicé cuando recién estaba aprendiendo sobre la programación. Es un sistema de consola desarrollado en C++ para el gestionamiento de una empresa ficticia que contiene Clientes, Ventas y Productos. La información de cada gestionamiento es guardada en archivos.',
      description2: 'Algunas de las caracteristicas de este software es el inicio de sesión, gestionar clientes, realizar ventas a partir de los clientes y productos que se encuentren en el sistema y la generación de informes para cada módulo.',
      sample: <img src={CompuTecnoSample} width='100%' alt="CompuTecnoSample"/>,
    },
    {
      name: "🌱 Grandma's Garden",
      image: GrandmaGarden,
      url: "https://drive.google.com/file/d/1MAC7-KWijB1P_8XamzFqUBdSKSufbm2b/preview",
      source: "Let's check this closer",
      sourceIcon: <CloudCircleIcon/>,
      description1: "This design was inspired by my grandmother, which is reflected in both its name and the eCommerce concept focused on plants—she loves flowers. For the development of this design, I used Adobe XD.",
      description2: "This project was primarily created as a final assignment for the 'UI Design with Adobe XD' course at Rocket Girls. The course covered topics such as user experience, best practices for graphical interface development, and color psychology.",
      sample: <img src={GrandmaGardenSample} width='100%' alt="GrandmaGardenSample"/>,
    },
    {
      name: "🎒 Internships Management",
      image: PPP,
      url: "",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: "This is a web-based application developed as a social project for Universidad Centroamericana as a group effort. The main objective is to manage students who are about to complete their Pre-Professional Internships. Through this system, students can validate previous work experience or apply for available internship opportunities.",
      description2: "Developed using JSP and the Eclipse IDE. The frontend was built with Bootstrap, and Jaspersoft Report was implemented for report generation. PostgreSQL was used as the database management system.",
      sample: <img src={PPPSample} width='100%' alt="GitHubIcon"/>,
    },
    {
      name: "👩🏽‍💻 My Profile",
      image: MyProfile,
      url: "mailto: renchifrabelle@gmail.com",
      source: "Send a recommendation",
      sourceIcon: <VolunteerActivismIcon/>,
      description1: "Some time ago, I set out to develop a platform where I could share more about myself and showcase the educational projects I have worked on. I have highlighted the projects I enjoyed programming the most and feel comfortable executing, as well as displaying the achievements and certifications I have obtained over time.",
      description2: "This website was built from scratch using React.js along with Material UI, and it integrates Email.js to enable contact form submissions. If you have any recommendations, feel free to reach out—I’d be happy to hear from you!",
      sample: <img src={MyProfileSample} width='100%' alt="MyProfileSample"/>,
    },
  ];

  return(
    <div style={{marginLeft: '0px', marginTop: '20px'}}>

      <Carousel show={6.5} swiping={true} slide={3} 
        leftArrow={false} rightArrow={false} responsive={true}>
        {cards.map((data) => (
          <Item name={data.name} image={data.image} source={data.source} sourceIcon={data.sourceIcon}
            url={data.url} description1={data.description1} description2={data.description2} sample={data.sample}/>
        ))}
      </Carousel>

    </div>
	
  );
  };

  export default CarrouselPortfolio;