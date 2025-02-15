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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
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
    const [open, setOpen] = React.useState(false);
    var [openThanks, setOpenThanks] = React.useState(false);
    var [openIssue, setOpenIssue] = React.useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mraakal', 'template_qxrma8n', form.current, '-AhfPLgdRwc8maVKK')
          .then((result) => {
              console.log(result.text);
              handleClose();
              setOpenThanks(true);
              return;
          })
          .catch((error) =>{
              handleClose();
              setOpenIssue(true);
              console.log(error.text);
          })
    };

    const handleCloseThx = () => {
    setOpenThanks(false);
    };

    const handleCloseIssue = () => {
    setOpenIssue(false);
    };


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

                        {/* <Link underline='none' href='https://api.whatsapp.com/send?phone=+50558289007' target={'_blank'}>
                            <SocialItem direction="row" spacing={1}>
                                <PhoneIcon fontSize="medium" color="primary"/>
                                <Typography variant="body2">+505 5828-9007</Typography>
                            </SocialItem>
                        </Link> */}

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

            
<           IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>

            <DialogContent>

                <form ref={form} onSubmit={sendEmail}>

                 <ContactUs/>

                    <Grid m={1} textAlign={'center'}>
                        <Button
                            variant='contained'
                            type="submit"
                        >
                            Send message
                        </Button>
                    </Grid>

                </form>

            </DialogContent>

            </Dialog>     

              {/* Success Dialog */}
        <Dialog
            open={openThanks}
            onClose={handleCloseThx}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {/* <DialogTitle style={{marginTop: '10px'}} id="alert-dialog-title">
             {"FEATURE IN PROGRESS"}
            </DialogTitle> */}

            <DialogContent>

                 <Box
                    noValidate
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    m: 'auto',
                    width: 'fit-content',
                    marginTop: '5px'
                    }}
                >
                    <CheckCircleIcon style={{fontSize: "50px", margin: "10px"}} color="success"/>

                </Box>

                <DialogContentText marginBottom="-10px">
                    
                    <Typography variant="h6" textAlign={'center'} mb={1}> 
                      Thank you! Your message has been sent 😊
                    </Typography>

                    <Typography variant="subtitle" textAlign={'center'}> 
                    I will be so happy to hear from you. In around of 
                    48 hours maximum, I will reach you back in your email.
                    </Typography>

                </DialogContentText>

            </DialogContent>

            <DialogActions style={{marginBottom: '10px', marginRight:'15px'}}>
                <Button size="medium" onClick={handleCloseThx} autoFocus>
                    Close
                </Button>
            </DialogActions>

        </Dialog>    

          {/* Error Dialog */}
          <Dialog
            open={openIssue}
            onClose={handleCloseIssue}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            {/* <DialogTitle style={{marginTop: '10px'}} id="alert-dialog-title">
             {"FEATURE IN PROGRESS"}
            </DialogTitle> */}

            <DialogContent>

                 <Box
                    noValidate
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    m: 'auto',
                    width: 'fit-content',
                    marginTop: '5px'
                    }}
                >
                    <ErrorIcon style={{fontSize: "50px", margin: "10px"}} color="error"/>

                </Box>

                <DialogContentText marginBottom="-10px">
                    
                    <Typography variant="h6" textAlign={'center'} mb={1}> 
                      Opps! Something bad happens 🤔
                    </Typography>

                    <Typography variant="subtitle" textAlign={'center'}> 
                    It looks that your email could not be sent. Please try again or email
                    me directly. Sorry for the inconvenience!
                    </Typography>

                </DialogContentText>

            </DialogContent>

            <DialogActions style={{marginBottom: '10px', marginRight:'15px'}}>
                <Button size="medium" onClick={handleCloseIssue} autoFocus>
                    Close
                </Button>
            </DialogActions>

        </Dialog>         

        </div>

    );  
};

export default ContactInfo;