import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography
  } from '@mui/material';
import { height } from '@mui/system';

const CardInfo = () => {
    return(
        <Box elevation='12' style={{
            backgroundColor:'#5c548a'
            }}
            height={{xs:'400px', sm: '500px', md:'300px',lg:'350px'}} 
            width={{xs:'400px',sm:'500px', md:'300px' ,lg:'350px'}}>

        </Box>

    );
};

export default CardInfo;