import React from 'react'
import {
    Button,
    Typography,
    Stack,
    Link
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
                        Let's talk! If you have some questions
                        here are some ways where you can contact me. 
                        Also, I'm open to recomendations 😊
                </Typography>

                <Stack textAlign="left" direction="row" spacing={3}>

                    <Stack textAlign="left" direction="column" spacing={2}>

                        {/* <SocialItem direction="row" spacing={1}>
                            <HomeIcon fontSize="medium" color="primary"/>
                            <Typography variant="body2">Mateare, Managua. Nicaragua</Typography>
                        </SocialItem> */}

                        <Link underline='none' href='https://api.whatsapp.com/send?phone=+50558289007' target={'_blank'}>
                            <SocialItem direction="row" spacing={1}>
                                <PhoneIcon fontSize="medium" color="primary"/>
                                <Typography variant="body2">+505 5828-9007</Typography>
                            </SocialItem>
                        </Link>

                        <Link underline='none' href="mailto: renchifrabelle@gmail.com">
                            <SocialItem direction="row" spacing={1}>
                                <EmailIcon fontSize="medium" color="primary"/>
                                <Typography variant="body2">renchifrabelle@gmail.com</Typography>
                            </SocialItem>
                        </Link>

                    </Stack>        

                </Stack>

                <Button variant="contained" startIcon={<SendIcon />} size="small">Send me a message</Button>

            </Stack>            

        </div>

    );  
};

export default ContactInfo;