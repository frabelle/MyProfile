import React from 'react';
import { Typography, Box } from '@mui/material';
import CarrouselAchievements from '../components/achievements/carrousel';
const Achievement = () => {
    
    return(

      <Box py={5}>

          <Box px={'40px'}>

            <Typography variant="h4" textAlign={'left'} color="primary.main">
              Achievements
            </Typography>

            <Typography variant="body2" textAlign={'left'} color="primary.main">
              Certifications, Honors, Awards and Education
            </Typography>

          </Box>

          <Box marginLeft={'10px'}>
            <CarrouselAchievements/>
          </Box>

      </Box>
        
        
    );
};

export default Achievement;