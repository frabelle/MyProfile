import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import TestImage from '../../image/feed/mypic.png'
import {
    Box,
    Button,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography
  } from '@mui/material';
import { height } from '@mui/system';

export default function CardInfo (props) {

    return(
        <div className='hover_color'>
            <Box elevation='12'
                width={{xs:'400px',sm:'500px', md:'300px' ,lg:'350px', xl:'500px'}}
                sx={{
                    borderRadius: '10px',
                }}>

                <img
                    src={props.image}
                    style={{borderRadius: '10px'}}
                    alt="imagen de prueba"
                    width="100%"
                />

                <div className='hover_color-inner'>
                    <Box className='hover_title' margin={2} textAlign={'center'} sx={{ justifyContent: 'center' }}>
                        
                        <Typography variant='h5' color="primary.contrastText">
                            {props.name}
                        </Typography>

                        <Typography variant='body1' color="primary.contrastText">
                            {props.description}
                        </Typography>

                    </Box>
                </div>

            </Box>
        </div>

    );
};
