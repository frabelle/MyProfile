import React from 'react'
import {
    Box,
    Card,
    CardContent,
    IconButton,
    Button,
    Typography,
    Stack
  } from '@mui/material';
import Logo from '../../image/logo.svg'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import SocialMedia from './socialmedia';
import SendIcon from '@mui/icons-material/Send';

const SocialItem = styled(Stack)(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  alignContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0),
}));

const ContactInfo = () => {

    return(

        <div style={{margin: '40px'}}>

            <Stack direction="column" spacing={2}>

                <Typography variant="h6">
                    Contact me
                </Typography>

                <Typography variant="body2">
                        Let's talk! Here are some ways where you can contact me
                </Typography>

                <Stack textAlign="left" direction="row" spacing={3}>

                    <Stack textAlign="left" direction="column" spacing={2}>

                        <SocialItem direction="row" spacing={1}>
                            <HomeIcon fontSize="medium" color="primary"/>
                            <Typography variant="body2">Mateare, Managua. Nicaragua</Typography>
                        </SocialItem>

                        <SocialItem direction="row" spacing={1}>
                            <PhoneIcon fontSize="medium" color="primary"/>
                            <Typography variant="body2">+505 5828-9007</Typography>
                        </SocialItem>

                        <SocialItem direction="row" spacing={1}>
                            <EmailIcon fontSize="medium" color="primary"/>
                            <Typography variant="body2">renchifrabelle@gmail.com</Typography>
                        </SocialItem>

                    </Stack>        

                </Stack>

                <Button variant="contained" startIcon={<SendIcon />} size="small">Send me a message</Button>

            </Stack>            

        </div>

    );  
};

export default ContactInfo;