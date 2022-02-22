import React from 'react';
import CardProject from '../components/portfolio/cardproject'
import { Container, Typography, Box, Grid } from '@mui/material';
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

        <Box px={'40px'}>

          <Typography variant="h4" textAlign={'left'} color="primary.main">
              Highlight Projects
          </Typography>

          <Typography variant="body2" textAlign={'left'} color="primary.main">
              Most of these projects were developed from university assignments
          </Typography>

      </Box>
        
        
        
    );
};

export default Portfolio;