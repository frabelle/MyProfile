import React from 'react'
import {
    Typography,
    Stack, 
    Link
  } from '@mui/material';
  import FacebookIcon from '@mui/icons-material/Facebook';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import { styled } from '@mui/material/styles';

  const SocialItem = styled(Stack)(({ theme }) => ({
    display: 'flex',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(0),
  }));

const SocialMedia = () => {

    return(

        <div style={{marginTop: '40px', marginBottom: '40px', marginLeft:'40px'}}>

            <Stack direction="column" spacing={2}>

            <Typography variant="h6">
                Social media
            </Typography>

            <Typography variant="body2">
                If you want to know more about myself,
                here are my social media accounts 
            </Typography>

            <Stack textAlign="left" direction="column" spacing={1.5}>

                <Link underline='none' href="https://www.facebook.com/RenchiFrabelle" target={'_blank'}>
                    <SocialItem direction="row" spacing={1}>
                        <FacebookIcon fontSize="medium" color="primary"/>
                        <Typography variant="body2">Renchi Frabelle</Typography>
                    </SocialItem>
                </Link>

                <Link underline='none' href="https://github.com/frabelle" target={'_blank'}>
                    <SocialItem direction="row" spacing={1}>
                        <GitHubIcon fontSize="medium" color="primary"/>
                        <Typography variant="body2">frabelle</Typography>
                    </SocialItem>
                </Link>

                <Link underline='none' href="https://www.instagram.com/renchifrabelle/" target={'_blank'}>
                    <SocialItem direction="row" spacing={1}>
                        <InstagramIcon fontSize="medium" color="primary"/>
                        <Typography variant="body2">renchifrabelle</Typography>
                    </SocialItem>
                </Link>

                <Link underline='none' href="https://www.linkedin.com/in/RenchiFrabelle" target={'_blank'}>
                    <SocialItem direction="row" spacing={1}>
                        <LinkedInIcon fontSize="medium" color="primary"/>
                        <Typography variant="body2">Renchi Meléndez</Typography>
                    </SocialItem>
                </Link>

                </Stack> 

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