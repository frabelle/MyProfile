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

export default function CardInfo (props) {
    return(
        <Box elevation='12' style={{
            backgroundColor:'#5c548a',
            borderRadius: '10px'}}
            height={{xs:'400px', sm: '500px', md:'300px',lg:'350px'}} 
            width={{xs:'400px',sm:'500px', md:'300px' ,lg:'350px'}}>

            <img
                src={props.image}
                alt="imagen de prueba"
                width="100%"
            />

        </Box>

    );
};
