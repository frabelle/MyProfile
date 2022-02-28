import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const ContactUs = () => {

  return (

    <Box justifyContent={'center'} marginTop={2} px={2}>

        <Typography variant="h3" textAlign={'center'}>
            Contact Form
        </Typography>

        <Typography variant="subtitle1" textAlign={'center'}>
            I'm happy that you are interested to contact me 😊
        </Typography>

        <Grid direction={'row'} py={1}>

            <Grid item py={2}>
                <TextField
                id="user_name"
                name="user_name"
                label="Name"
                fullWidth
                required
                variant="outlined"
                />
            </Grid>

            <Grid item>
                <TextField
                id="user_email"
                name="user_email"
                type={'email'}
                label="Email"
                fullWidth
                required
                variant="outlined"
                />
            </Grid>

            <Grid item py={2}>
                <TextField
                id="user_subject"
                name="user_subject"
                label="Subject"
                fullWidth
                required
                variant="outlined"
                />
            </Grid>

            <Grid item>
                <TextField
                id="message"
                name="message"
                label="Message"
                multiline
                fullWidth
                rows={4}
                required
                variant="outlined"
                />
            </Grid>

            {/* <Grid mt={3} textAlign={'center'}>
                <Button
                    variant='contained'
                    type="submit"
                >
                    Send message
                </Button>
            </Grid> */}

        </Grid>


        {/* <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Subject</label>
        <input type="email" name="user_subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" /> */}
        
    </Box>
    
  );
};