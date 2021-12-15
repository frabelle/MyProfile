import React from 'react';
import CardProject from '../components/portfolio/cardproject'
import { Container, Typography, Box } from '@mui/material';
import { v4 as uuidv4 } from "uuid";
import Carroussel from '../components/portfolio/carrousel';
import { margin } from '@mui/system';

const Portfolio = () => {

    let cards = [
        {
          key: uuidv4(),
          content: <CardProject />
        },
        {
          key: uuidv4(),
          content: <CardProject />
        },
        {
          key: uuidv4(),
          content: <CardProject />
        },
        {
          key: uuidv4(),
          content: <CardProject />
        },
        {
          key: uuidv4(),
          content: <CardProject />
        },
        {
          key: uuidv4(),
          content: <CardProject />
        },
        {
          key: uuidv4(),
          content: <CardProject />
        }
      ];

    return(

        <Box sx={{
            background: '#211940'
        }}>

            <Box sx={{py: 8}}>

                <Typography variant="h4" textAlign={'center'} color="primary.contrastText">
                    Let's check some of my personal projects
                </Typography>

                <Typography variant="body2" textAlign={'center'} sx={{p:1}} color="primary.contrastText">
                    Most of these projects were developed from university assignments
                </Typography>

                <br/><br/>

                <Carroussel
                cards={cards}
                height="600px"
                width="90%"
                margin="0 auto"
                offset={2}
                showArrows={false}
                /> 

            </Box>

           
        </Box>
        
        
        
    );
};

export default Portfolio;