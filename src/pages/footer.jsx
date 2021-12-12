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
import ContactInfo from '../components/footer/contact';
const Footer = () => {

    return(

        <div>
            <Grid container spacing={3} marginBottom={'30px'} sx={{
                    alignItems: 'center',
                    display: 'flex'
                }}>

                <Grid item xs={12} md={6} lg={5}>
                    <Info/>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <SocialMedia/>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <ContactInfo/>
                </Grid>

            </Grid>

            <Copyright/>

        </div>

        
    );  
};

export default Footer;