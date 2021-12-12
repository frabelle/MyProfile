import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography, Chip } from '@mui/material';
import Paper from '@mui/material/Paper';
import Waves from '../image/layered-waves.svg'
import Profile from '../image/profile.jpeg'
import Logo from '../image/logo.svg'
import Stack from '@mui/material/Stack';
import "../App.css"
import { styled } from '@mui/material/styles';

const Item = styled(Chip)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  backgroundColor:'#5c548a',
  color: '#ffffff'
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

                <Typography variant="body1">
                    Passionate about new technologies and their development💜
                </Typography>

            </Box>

            <Stack direction="row" spacing={2}
                sx={{
                display: 'flex',
                textAlign: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                marginTop: '15px'
            }}>
                <Item label="Junior Developer"/>
                <Item label="UI/UX"/>
                <Item label="Systems Engineering"/>
                <Item label="Web &amp; Android App Developer"/>
            </Stack>

        </Box>
        
    );
};

export default Cover;