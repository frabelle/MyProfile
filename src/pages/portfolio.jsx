import React from 'react';
import CarrouselPortfolio from '../components/portfolio/carrousel';
import { Typography, Box } from '@mui/material';

const Portfolio = () => {

    return(

        <div>
            <Box px={'40px'} >

            <Typography variant="h4" textAlign={'left'} color="primary.main">
                Highlight Projects
            </Typography>

            <Typography variant="body2" textAlign={'left'} color="primary.main">
                Most of these projects were developed from university assignments
            </Typography>

            </Box>

            <Box marginLeft={'20px'}>
                <CarrouselPortfolio/>
            </Box>

        </div>       
        
    );
};

export default Portfolio;