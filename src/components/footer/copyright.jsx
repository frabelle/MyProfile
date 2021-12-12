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

const Copyright = () => {

    return(

        <div style={{textAlign: 'center'}}>

            <Box height="80px" sx={{
                backgroundColor: '#211940',
                display: 'flex',
                textAlign: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant="body2" color="#f5f5f5">
                    Copyright © 2022 My Profile by Renchi Meléndez
                </Typography>
            </Box>

        </div>

    );  
};

export default Copyright;