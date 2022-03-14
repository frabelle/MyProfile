import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Item from './projectcircle';

import Videos from '../../image/portfolio/Icons/video.png'
import VideoSample from '../../image/portfolio/samples/VideoSample.gif'

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

import RolyLab from '../../image/portfolio/Icons/RolyLab.png'

import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const CarrouselPortfolio = () => {

  const cards = [
    {
      name: "🥗 Attentip Recipes",
      image: AttentipRecipes,
      url:"https://github.com/frabelle/AttentipRecipes",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: "Es una aplicación móvil en el que puedes descubrir increibles recetas y conocer más sobre el tipo de cocina que prevalece en algunos países del mundo. Este aplicativo ha sido desarrollado con Kotlin y se usó el servicio de spoonacular.com/food-api para la recopilación de la información que se muestra.",
      description2: "Some features in this app are: SQLite local database, Dependency injection, Repository factory, Singleton, APIs Rest, Architectural pattern MVVM/MVI, Offline connection, Uniflow, Fragments, Navigation Graph.",
      sample: <img src={AttentipRecipesSample} width='100%' alt="this is an image"/>,
    },
    {
      name: "🏋️‍♀ i Care About U",
      image: iCareAboutU,
      url:"https://github.com/frabelle/Attentip_iCareAboutU",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: 'Es una aplicación para dispositivos android que muestra ejercicios para realizar en una pausa activa, estos se clasifican en ejercicios fisicos y en ejercicios mentales. Este fue un proyecto desarrollado en grupo para la entrega de un proyecto final en la universidad. Fue desarrollado con Java.',
      description2: 'Some features in this app are: Fragments, Material Design, Shared Preferences, Topbar & Bottombar, Glide.',
      sample: <img src={iCareAboutUSample} width='100%' alt="this is an image"/>,
    },
    {
      name: "🕹 Pokedex",
      image: Pokedex,
      url:"https://github.com/frabelle/Pokedex",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: 'Es un aplicativo móvil para dispositivos Android inspirada en Pokémon. Esta aplicación muestra la información de 10 pokemones previamente definidos. El propósito principal de este trabajo fue en aprender la forma en la que trabajan los Fragments y los Dialog Fragments. Al seleccionar un pokemón, se muestra una ventana con información más detallada sobre este. Fue desarrollado con Java.',
      description2: 'Some features in this app are: Fragments, Material Design, Shared Preferences, Topbar, Dialog Fragment, Recycle view.',
      sample: <img src={PokedexSample} width='100%' alt="this is an image"/>
    },
    {
      name: "😺 Michi App",
      image: MichiApp,
      url:"https://github.com/frabelle/MichiApp",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: 'Esta es una de mis aplicaciones favoritas, es un aplicativo para dispositivos móviles en el que se muestra información de todas las razas de gatos que existen. Al dar clic en uno de los cards se muestra información más detallada sobre la raza y a su vez contiene un hipervínculo que lo redirecciona a un sitio web en donde se puede encontrar la información completa.',
      description2: 'Se desarrolló con el lenguaje de programación Kotlin y se utilizó el servicio de docs.thecatapi.com para el consumo de la información que se muestra. Algunas de las caracteristicas son: SQLite Local DB, Singleton, MVVM/MVI, Offline connection, Uniflow, Dialog Fragment.',
      sample: <img src={MichiAppSample} width='100%' alt="this is an image"/>
    },
    {
      name: "📹 COVID Video Contest",
      image: Videos,
      url:"https://youtu.be/nD-2Y1_wOQo",
      source: "Watch my video on YouTube",
      sourceIcon: <YouTubeIcon/>,
      description1: 'La Universidad Centroamericana realizó un concurso en donde los estudiantes de distintas carreras pudieran compartir sus ideas de posibles soluciones que podrían dar para las circunstancias que hemos venido viviendo en esta pandemia. Tomé la valentía de participar, a pesar de que no soy ninguna experta, ni mucho menos estudiada en lo que respecta sobre la edición de videos, sin embargo, me gusta mucho y lo veo más como un pasatiempo para mí.',
      description2: 'Me llevé la grata sorpresa de haber obtenido el primer lugar en este concurso. En un comienzo nunca creí que lo que miraba como un pasatiempo, llegase a ser realmente buena en ello.',
      sample: <img src={VideoSample} width='100%' alt="this is an image"/>
    },
    {
      name: "⛪ Roly Kermesse",
      image: RolyKermesse,
      url:"https://github.com/frabelle/Rolykermesse",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: 'Esta es una parte de un proyecto elaborado para una asignatura en donde se facilita la gestión de una kermesse. Este proyecto tiene implementado el módulo de Arqueo de Caja dentro de este se encuentra la gestión de Arqueo de caja, Monedas, Denominaciones y Tasas de cambio.',
      description2: 'En este aplicativo web se utilizó el lenguaje de programación PHP como backend y para el frontend se utilizó la biblioteca de Bootstrap. Algunas de las implementaciones en este proyecto fue la arquitectura MVC, JAlert, Select2, AJAX, Fontawesome.',
      sample: <img src={RolyKermesseSample} width='100%' alt="this is an image"/>
    },
    {
      name: "⛪ Mygro Kermesse",
      image: MygroKermesse,
      url:"https://github.com/frabelle/Mygrokermesse",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: 'Esta es una parte de un proyecto elaborado para una asignatura en donde se facilita la gestión de una kermesse. Este proyecto tiene implementado el módulo de Arqueo de Caja dentro de este se encuentra la gestión de Arqueo de caja, Monedas, Denominaciones y Tasas de cambio. También tiene una sección en el que se generan informes de ciertos módulos y la auditoria de las actividades e ingresos por kermesse.',
      description2: 'Este aplicativo web fue desarrollo con el lenguaje de programación C#, utilizando el framework .NET, para el desarrollo del frontend se utilizó la biblioteca de Bootstrap 5 y Report Builder para la creación y generación de los informes.',
      sample:  <img src={MygroKermesseSample} width='100%' alt="this is an image"/>
    },
    {
      name: "💻 Computecno Project",
      image: CompuTecno,
      url:"https://github.com/frabelle/ComputecnoProject",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: 'Este fue uno de los primeros proyectos que realicé cuando recién estaba aprendiendo sobre la programación. Es un sistema de consola desarrollado en C++ para el gestionamiento de una empresa ficticia que contiene Clientes, Ventas y Productos. La información de cada gestionamiento es guardada en archivos.',
      description2: 'Algunas de las caracteristicas de este software es el inicio de sesión, gestionar clientes, realizar ventas a partir de los clientes y productos que se encuentren en el sistema y la generación de informes para cada módulo.',
      sample: <img src={CompuTecnoSample} width='100%' alt="this is an image"/>,
    },
    {
      name: "🌱 Grandma's Garden",
      image: GrandmaGarden,
      url:"https://drive.google.com/file/d/1MAC7-KWijB1P_8XamzFqUBdSKSufbm2b/preview",
      source: "Let's check this closer",
      sourceIcon: <CloudCircleIcon/>,
      description1: 'Este fue un diseño inspirado en mi abuela, es por ello el nombre y también por el diseño de un eCommerce relacionado en las plantas, esto debido porque le gusta mucho las flores. Para el desarrollo de este diseño utilicé la aplicación de Adobe XD.',
      description2: 'Fue desarrollado principalmente como proyecto final para la aprobación del curso "Diseño de interfaces con Adobe XD" con Rocket Girls. En este curso se vieron aspectos como: la experiencia de usuario, técnicas para el buen desarrollo de interfaces gráficas y la psicología del color.',
      sample: <img src={GrandmaGardenSample} width='100%' alt="this is an image"/>,
    },
    {
      name: "🎒 Internships Management",
      image: PPP,
      url:"",
      source: "See on Github",
      sourceIcon: <GitHubIcon/>,
      description1: 'Este es un sistema aplicativo web que fue realizado como proyecto social para la Universidad Centroamericana de forma grupal. El objetivo principal es el gestionamiento de estudiantes que vayan a realizar sus Prácticas Pre-Profesionales, desde aquí también se pueden convalidar la experiencia laboral que hayan hecho anteriormente o bien pueden aplicar a una de las opciones que aparecen en las ofertas.',
      description2: 'Se desarrollo bajo el lenguaje de programación JSP y para esto se utilizó el IDE Eclipse. Para el frontend se utilizó la biblioteca de Bootstrap, también se implementó la generación de reportes haciendo uso de Jaspersoft Report. Como gestor de bases de datos se utilizó PostgreSQL.',
      sample: <img src={PPPSample} width='100%' alt="this is an image"/>,
    },
    {
      name: "👩🏽‍💻 My Profile",
      image: MyProfile,
      url:"mailto: renchifrabelle@gmail.com",
      source: "Send a recommendation",
      sourceIcon: <VolunteerActivismIcon/>,
      description1: 'Hace tiempo me propuse en desarrollar una plataforma en donde pudiese hablar de mí y mostrar cada uno de los pequeños trabajos educativos que he venido realizando, he enfatizado mucho los proyectos que más me han gustado programar y en los que también me siento cómoda ejecutando, asi como también mostrar cada uno de los logros y certificaciones que he obtenido en todo este tiempo.',
      description2: 'Este sitio web fue desarrollado desde cero, utilizando la libreria React.js en conjunto de Material UI, implementación de Email.js el cual permite enviar correos a través del formulario de contacto del sitio. Sí tienes alguna recomendación con gusto podrías contactarme y hacermelo saber, estaré muy feliz de escucharte.',
      sample: <img src={MyProfileSample} width='100%' alt="this is an image"/>,
    }
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