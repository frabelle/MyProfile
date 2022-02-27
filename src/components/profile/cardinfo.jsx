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
        <Box elevation='12'
            style={{
            borderRadius: '10px'}}
            width={{xs:'400px',sm:'500px', md:'300px' ,lg:'350px'}}>

            <img
                src={props.image}
                style={{borderRadius: '10px'}}
                alt="imagen de prueba"
                width="100%"
            />

        </Box>

    );
};
