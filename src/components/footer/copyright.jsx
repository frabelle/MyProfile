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
  import FacebookIcon from '@mui/icons-material/Facebook';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                    Copyright © Renchi Meléndez 2022
                </Typography>
            </Box>

        </div>

    );  
};

export default Copyright;