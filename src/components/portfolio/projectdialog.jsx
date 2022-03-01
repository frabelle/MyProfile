import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import GitHubIcon from '@mui/icons-material/GitHub';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { Typography, Grid, Chip, Stack, Link } from '@mui/material';
import Test from '../../image/portfolio/sample2.png'
import DialogCarouselProject from './dialogcarousel';

export default function MaxWidthDialog() {
    const cards = [
        {
          name: "Salesforce Certified Administrator",
          image: Test,
        },
        {
          name: "Salesforce Certified Administrator",
          image: Test,
        }
    
      
      ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>

      <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      
      <Dialog
        fullWidth={true}
        maxWidth={'lg'}
        open={open}
        onClose={handleClose}
        scroll="body"
      >

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
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
                <Grid container rowSpacing={2} columnSpacing={{lg: 2}} margin={0} maxWidth={'lg'} 
                  justifyContent={'center'} alignItems={'center'}>

                    <Grid item xs={12} md={12} lg={7}>
                        <img
                        src={Test}
                        width='100%'
                        alt="this is a image test"/>
                            
                    </Grid>

                    <Grid item xs={12} md={12} lg={5} spacing={10} >
                        <Typography variant="h5" fontSize={{lg: "32px"}}>
                            Internship Management
                        </Typography>

                        <Typography variant="body2" py={1}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus 
                          ipsum sed metus auctor ornare. Fusce vehicula mauris a tortor laoreet, 
                          sit amet aliquam turpis eleifend.Lorem ipsum dolor sit amet, consectetur 
                          adipiscing elit. Suspendisse maximus ipsum sed metus auctor ornare.
                        </Typography>

                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus 
                          ipsum sed metus auctor ornare. Fusce vehicula mauris a tortor laoreet, 
                          sit amet aliquam turpis eleifend.Lorem ipsum dolor sit amet, consectetur 
                          adipiscing elit. Suspendisse maximus ipsum sed metus auctor ornare.
                        </Typography>

                        <Box>
                          <Stack py={2} mt={1} direction="column" spacing={2}>
                             <Button variant="contained" startIcon={<GitHubIcon />} size="small"
                              href="https://github.com/frabelle" target={'_blank'}>
                              See on Github
                            </Button>
                          </Stack>
                        </Box>
                        
                    </Grid>

                </Grid>

          </Box>
        </DialogContent>

        {/* <DialogActions mt={'-10px'} >
          <Button size="medium" onClick={handleClose}>
            Close
         </Button>
        </DialogActions> */}

      </Dialog>
    </React.Fragment>
  );
}