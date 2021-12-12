import * as React from 'react';
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
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Logo from '../image/logo.svg'

const pages = ['Profile', 'Skills', 'Portfolio', 'Achievements', 'Contact me'];
const settings = ['English', 'Spanish'];

const ResponsiveAppBar = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
  
      const handleClose = () => {
        setOpen(false);
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
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Change theme">
                <IconButton style={{color:"#ffffff"}} size="small" variant="contained"
                    onClick={handleClickOpen} sx={{ p: 0 }}>
                    <DarkModeIcon/>
                </IconButton>
            </Tooltip>
        
            <Tooltip title="Translate">
              <IconButton style={{color:"#ffffff", marginLeft:"15px"}} size="small" variant="contained" 
                onClick={handleClickOpen} sx={{ p: 0 }}>
                    <TranslateIcon/>
              </IconButton>
            </Tooltip>

            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}

          </Box>

        </Toolbar>
      </Container>

      <Dialog
            open={open}
            onClose={handleClose}
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
                <Button size="medium" onClick={handleClose} autoFocus>
                    Close
                </Button>
            </DialogActions>

        </Dialog>

    </AppBar>

  );
};
export default ResponsiveAppBar;
