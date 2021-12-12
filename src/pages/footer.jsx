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
import Copyright from '../components/footer/copyright';
import SocialMedia from '../components/footer/socialmedia';
import Info from '../components/footer/info';
const Footer = () => {

    return(

        <div>
            <Grid container spacing={3}>

                <Grid item xs={12} md={6} lg={5}>
                    <Info/>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>

                    <SocialMedia/>

                </Grid>

                <Grid item xs={12} md={6} lg={4}>

                </Grid>

            </Grid>

            <Copyright/>

        </div>

        
    );  
};

export default Footer;