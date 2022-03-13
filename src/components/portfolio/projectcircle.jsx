import React from 'react';
import { Box, Typography, Stack, Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogProject from '../portfolio/projectdialog'
import Test from '../../image/portfolio/sample.jpg'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
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
        <div style={{textAlign: 'center', marginInline: '0px'}} >
            <img
                    className="imgIcons"
                    src={props.image}
                    alt="imagen de prueba"
                    onClick={handleClickOpen}
                />
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

                        <Grid item xs={12} md={12} lg={8}>

                            {props.sample}
                                
                        </Grid>

                        <Grid item xs={12} md={12} lg={4} spacing={10} >

                            <Typography textAlign={'center'} variant="h4" mb={1}>
                                {props.name}
                            </Typography>

                            <Typography variant="body2" py={1} textAlign="justify">
                                {props.description1}
                            </Typography>

                            <Typography variant="body2" textAlign="justify">
                                {props.description2}
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