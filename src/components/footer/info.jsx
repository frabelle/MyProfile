import React from 'react'
import {
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
                    {/* <i>My Profile</i> main purpose is to show people what I am capable of 
                    doing and know how has been my journey during my preparation 
                    to become a professional in tech. Feel free to send me recomendations 
                    for improving my website. I will be so happy to hear some feedback from you.
                    *This website has been made from scratch, using the JavaScript library 
                    for the user interface, React. */}
                    <i>My Profile</i> is designed to showcase my skills, projects, and professional 
                    journey in the tech industry. This platform highlights my expertise, growth, 
                    and dedication to becoming a technology professional. I am always looking for 
                    ways to improve, so feel free to share any recommendations on enhancing 
                    my website-I’d love to hear your feedback!
                    *This website was built from scratch using React, a JavaScript library for 
                    building user interfaces.
                </Typography>

            </Stack>            

        </div>

    );  
};

export default Info;