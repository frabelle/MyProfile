import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Grid
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Button from '@mui/material/Button';
import TranslateIcon from '@mui/icons-material/Translate';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Logo from '../image/logo.svg'
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { ContactUs } from './email/contactform';
import CloseIcon from '@mui/icons-material/Close';

const pages = ['Profile', 'Portfolio', 'Achievements'];
const settings = ['English', 'Spanish'];

const ResponsiveAppBar = () => {

  const form = useRef();
  var [open, setOpen] = React.useState(false);
  const [openWIP, setOpenWIP] = React.useState(false);
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

      const handleClickOpen = () => {
        setOpen(true);
      };
  
      const handleClose = () => {
        setOpen(false);
      };

      const handleClickOpenWIP = () => {
        setOpenWIP(true);
      };
  
      const handleCloseWIP = () => {
        setOpenWIP(false);
      };

      const handleCloseThx = () => {
        setOpenThanks(false);
      };

      const handleCloseIssue = () => {
        setOpenIssue(false);
      };

  return (
    <AppBar position="static">

      <Container maxWidth="xl">

        <Toolbar disableGutters>

          <img
            noWrap
            component="div"
            sx={{ mr: 0, display: { xs: 'none', md: 'flex' } }}
            src={Logo}
            alt="imagen de prueba"
            width="45px"
        />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            My Profile
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={'#'+page}
              >
                {page}
              </Button>
            ))}

            <Button
              key={'Contact me'}
              sx={{ my: 2, color: 'white', display: 'block' }}
              target="_blank"
              href="https://drive.google.com/file/d/1jCg6dWLyDyHCvmooQ7PPD8bXyskz6zMq/preview"
            >
                Download Resume
            </Button>

            <Button
              key={'Contact me'}
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={handleClickOpen}
            >
                Contact me
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Change theme">
                <IconButton style={{color:"#ffffff"}} size="small" variant="contained"
                    onClick={handleClickOpenWIP} sx={{ p: 0 }}>
                    <DarkModeIcon/>
                </IconButton>
            </Tooltip>
        
            <Tooltip title="Translate">
              <IconButton style={{color:"#ffffff", marginLeft:"15px"}} size="small" variant="contained" 
                onClick={handleClickOpenWIP} sx={{ p: 0 }}>
                    <TranslateIcon/>
              </IconButton>
            </Tooltip>

          </Box>

        </Toolbar>
      </Container>

      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">

            <IconButton
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

       <Dialog
            open={openWIP}
            onClose={handleCloseWIP}
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
                    <ReportProblemIcon style={{fontSize: "50px", margin: "10px"}} color="warning"/>

                </Box>

                <DialogContentText marginBottom="-10px">
                    <strong>Feature in progress.</strong> Sorry for the inconvenience, it will be up and running soon. 
                    In the meanwhile, I invite you to explore my website😊❤
                </DialogContentText>

            </DialogContent>

            

            <DialogActions style={{marginBottom: '10px', marginRight:'15px'}}>
                <Button size="medium" onClick={handleCloseWIP} autoFocus>
                    Close
                </Button>
            </DialogActions>

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


    </AppBar>

  );
};
export default ResponsiveAppBar;
