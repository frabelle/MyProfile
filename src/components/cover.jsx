import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography, Chip, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import Waves from '../image/layered-waves.svg'
import Profile from '../image/profile.jpeg'
import Logo from '../image/logo.svg'
import "../App.css"
import { styled } from '@mui/material/styles';

const Item = styled(Chip)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  backgroundColor:'#5c548a',
  color: '#ffffff'
}));

const Contenedor = styled(Stack)(({ theme }) => ({
    display: 'flex',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
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
                    src={Profile}
                    alt="imagen de prueba"
                />
            </Box>

            <Box textAlign="center" marginTop="10px">

                <Typography variant="h4">
                    Renchi Frabelle 
                    Meléndez Simplina
                </Typography>

                <Typography variant="body1" margin={{xs: 1}}>
                    Passionate about new technologies and their development💜
                </Typography>

            </Box>

            <Contenedor direction={{xs:"column", sm:"column", md:"row"}} spacing={2}
                sx={{
                marginTop: '15px'
            }}>

                <Contenedor direction={{xs: 'row'}} spacing={2}>
                    <Item label="Junior Developer"/>
                    <Item label="UI/UX"/>
                </Contenedor>

                <Contenedor direction={{xs: 'row'}} spacing={2}>
                    <Item label="Systems Engineering"/>
                    <Item label="Web &amp; Android App Developer"/>
                </Contenedor>

            </Contenedor>

        </Box>
        
    );
};

export default Cover;