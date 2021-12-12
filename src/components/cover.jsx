import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Waves from '../image/layered-waves.svg'
import Profile from '../image/profile.jpeg'
import Logo from '../image/logo.svg'
import Stack from '@mui/material/Stack';
import "../App.css"
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  borderRadius: '100px',
  backgroundColor:'#d9b3ca',
}));

const Cover = () =>{

    return(

        <Box color="secondary" height="100%">

            <Box
                sx={{
                    height: "10%",
                    backgroundColor: 'other2.main'
                }}
            >
                <img
                    src={Waves}
                    alt="imagen de prueba"
                    width="100%"
                />
                    
            </Box>

            <Box textAlign="center" marginTop="-11%">
                <img
                    className="imgCircle"
                    src={Logo}
                    alt="imagen de prueba"
                />
            </Box>

            <Box textAlign="center" marginTop="10px">

                <Typography variant="h4">
                    Renchi Frabelle 
                    Meléndez Simplina
                </Typography>

                <Stack direction="row" spacing={2}
                 sx={{
                    display: 'flex',
                    textAlign: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    marginTop: '10px'
                }}>
                    <Item> &nbsp; Attitude 1 &nbsp;</Item>
                    <Item> &nbsp; Attitude 2 &nbsp;</Item>
                    <Item> &nbsp; Attitude 3 &nbsp;</Item>
                    <Item> &nbsp; Attitude 4 &nbsp;</Item>

                </Stack>
            </Box>

        </Box>
        
    );
};

export default Cover;