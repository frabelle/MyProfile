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
                    <i>My Profile</i> main purpose is to show people what I am capable of 
                    doing and know how has been my journey during my preparation 
                    to become a professional in tech. Feel free to send me recomendations 
                    for improving my website. I will be so happy to hear some feedback from you.
                    *This website has been made from scratch, using the JavaScript library 
                    for the user interface, React.
                </Typography>

            </Stack>            

        </div>

    );  
};

export default Info;