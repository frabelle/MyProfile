import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
    Button,
    Typography,
    Stack,
    Link,
    Box,
    Grid
  } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import SocialMedia from './socialmedia';
import SendIcon from '@mui/icons-material/Send';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { ContactUs } from '../email/contactform';

const SocialItem = styled(Stack)(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  alignContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0),
}));

const ContactInfo = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gxg49fr', 'template_qxrma8n', form.current, '-AhfPLgdRwc8maVKK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
      setOpen2(true);
    };

    const handleClose2 = () => {
      setOpen2(false);
    };

    return(

        <div style={{margin: '40px'}}>

            <Stack direction="column" spacing={2}>

                <Typography variant="h6">
                    Contact me
                </Typography>

                <Typography variant="body2">
                        Let's talk! If you have some questions or want 
                        to send me a recommendation, you can do it by 
                        using this contact information 💜
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

                <Button variant="contained" startIcon={<SendIcon />} size="small" onClick={handleClickOpen}>
                    Send me a message
                </Button>

            </Stack>

            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">

            {/* <DialogTitle style={{marginTop: '10px'}} id="alert-dialog-title">
             {"FEATURE IN PROGRESS"}
            </DialogTitle> */}

            <DialogContent>

                <form ref={form} onSubmit={sendEmail}>

                 <ContactUs/>

                    <Grid m={1} textAlign={'center'}>
                        <Button
                            variant='contained'
                            type="submit"
                            onClick={handleClose}
                        >
                            Send message
                        </Button>
                    </Grid>

                </form>

            </DialogContent>

            </Dialog>            

<Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">

            {/* <DialogTitle style={{marginTop: '10px'}} id="alert-dialog-title">
             {"FEATURE IN PROGRESS"}
            </DialogTitle> */}

            <DialogContent>

                <form ref={form} onSubmit={sendEmail}>

                 <ContactUs/>

                    <Grid m={1} textAlign={'center'}>
                        <Button
                            variant='contained'
                            type="submit"
                            onClick={handleClose}
                        >
                            Send message
                        </Button>
                    </Grid>

                </form>

            </DialogContent>

            </Dialog>    
        </div>

    );  
};

export default ContactInfo;