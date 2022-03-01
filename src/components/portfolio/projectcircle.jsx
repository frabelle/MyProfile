import React from 'react';
import { Box, Typography, Chip, Stack, Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Button from '@mui/material/Button';
import DialogProject from '../portfolio/projectdialog'
import Test from '../../image/portfolio/sample2.png'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function CircleProject (props) {

    const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
        <DialogProject/>
      };
  
      const handleClose = () => {
        setOpen(false);
      };

  return(
      <div>
        <div style={{textAlign: 'center', marginInline: '0px'}}>
            <img
                    className="imgIcons"
                    src={props.image}
                    alt="imagen de prueba"
                    onClick={handleClickOpen}
                />
        {/* <Typography variant="overline" display="block" xs={{fontSize:'0px'}} gutterBottom>
            {props.name}
        </Typography> */}
        </div>

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
                                {props.name}
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
                                <Button variant="contained" startIcon={props.sourceIcon} size="small"
                                href={props.url} target={'_blank'}>
                                {props.source}
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

    </div>
  );
  };