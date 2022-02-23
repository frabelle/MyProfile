import React from 'react';
import CardProject from '../components/portfolio/cardproject'
import { Container, Typography, Box, Grid } from '@mui/material';
import { v4 as uuidv4 } from "uuid";
import Carroussel from '../components/portfolio/carrousel';
import { margin } from '@mui/system';

const Achievement = () => {
    
    return(

        <Box px={'40px'}>

          <Typography variant="h4" textAlign={'left'} color="primary.main">
            Achievements
          </Typography>

          <Typography variant="body2" textAlign={'left'} color="primary.main">
            Certifications, Awards, Education and Courses
          </Typography>

      </Box>
        
        
        
    );
};

export default Achievement;