import React from 'react'
import {
    Box,
    Card,
    CardContent,
    IconButton,
    Grid,
    Typography,
    Stack
  } from '@mui/material';
import Logo from '../../image/logo.svg'

const Info = () => {

    return(

        <div style={{margin: '40px'}}>

            <Stack direction="column" spacing={1}>

                <img
                    src={Logo}
                    alt="Logo"
                    width= "100px"
                />

                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque euismod auctor urna. Nam in molestie enim. Nunc in mi hendrerit, 
                    malesuada erat sed, sagittis orci. Sed et mattis elit. Nulla nec fermentum elit, 
                    at hendrerit massa. Sed at mi magna. Morbi justo tortor, dapibus nec ipsum non, 
                    pellentesque dapibus sapien.
                </Typography>

            </Stack>            

        </div>

    );  
};

export default Info;