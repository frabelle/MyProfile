import React from 'react'
import {
    Box,
    Card,
    CardContent,
    IconButton,
    Grid,
    Typography,
    Stack
  } from '@mui/material';
  import FacebookIcon from '@mui/icons-material/Facebook';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMedia = () => {

    return(

        <div style={{margin: '40px'}}>

            {/* <Typography variant="h6">
                Social media
            </Typography> */}

            <Stack textAlign="left" direction="column" spacing={-1}>

                <IconButton aria-label="delete" size="large" >
                    <FacebookIcon fontSize="large" color="primary"/>
                </IconButton>

                <IconButton aria-label="delete" size="large" >
                    <GitHubIcon fontSize="large" color="primary"/>
                </IconButton>

                <IconButton aria-label="delete" size="large" >
                    <InstagramIcon fontSize="large" color="primary"/>
                </IconButton>

                <IconButton aria-label="delete" size="large" >
                    <LinkedInIcon fontSize="large" color="primary"/>
                </IconButton>

            </Stack>      

            <br/>   

            <Typography variant="h6">
                Contact information
            </Typography>

            <Stack textAlign="left" direction="row" spacing={-1}>

                <IconButton aria-label="delete" size="large" >
                    <FacebookIcon fontSize="large" color="primary"/>
                </IconButton>

                <IconButton aria-label="delete" size="large" >
                    <GitHubIcon fontSize="large" color="primary"/>
                </IconButton>

                <IconButton aria-label="delete" size="large" >
                    <InstagramIcon fontSize="large" color="primary"/>
                </IconButton>

                <IconButton aria-label="delete" size="large" >
                    <LinkedInIcon fontSize="large" color="primary"/>
                </IconButton>

            </Stack>           

        </div>

    );  
};

{/* <Stack textAlign="left" direction="column" spacing={1.5}>

<Typography variant="h6">
    Social media
</Typography>

<FacebookIcon fontSize="large" color="primary"/>
<GitHubIcon fontSize="large" color="primary"/>
<InstagramIcon fontSize="large" color="primary"/>
<LinkedInIcon fontSize="large" color="primary"/>

</Stack>         */}

export default SocialMedia;