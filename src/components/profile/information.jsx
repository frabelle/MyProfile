import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography,
    Stack,
    Tooltip
  } from '@mui/material';
  import CakeIcon from '@mui/icons-material/Cake';
  import FlagIcon from '@mui/icons-material/Flag';
  import HomeIcon from '@mui/icons-material/Home';
  import PersonIcon from '@mui/icons-material/Person';
  import PublicIcon from '@mui/icons-material/Public';
  import EmailIcon from '@mui/icons-material/Email';
  import SchoolIcon from '@mui/icons-material/School';

const PersonalInformation = () => {
    return (
        <Card elevation='12'>

        <CardContent>
            <Typography variant="h5" component="div">
                Personal information
            </Typography>

            <br/>

            <Stack direction="column" spacing={2}>

                <Stack direction="row">
                    <Tooltip title="Date of Birth">
                        <CakeIcon/>
                    </Tooltip>
                    <Typography variant="body1">
                        &nbsp; February 18, 2001
                    </Typography>
                </Stack>
                
                <Stack direction="row">
                    <Tooltip title="Nacionality">
                        <PublicIcon/>
                    </Tooltip>
                    <Typography variant="body1">
                        &nbsp; Honduran
                    </Typography>
                </Stack>    
                
                
                <Stack direction="row">
                    <Tooltip title="Residence Country">
                        <HomeIcon/>
                    </Tooltip>
                    <Typography variant="body1">
                        &nbsp; Managua, Nicaragua
                    </Typography>
                </Stack>   

                <Stack direction="row">
                    <Tooltip title="Education">
                        <SchoolIcon/>
                    </Tooltip>
                    <Typography variant="body1">
                        &nbsp; Universidad Centroamericana
                    </Typography>
                </Stack>   

                <Stack direction="row">
                    <Tooltip title="Email">
                        <EmailIcon/>
                    </Tooltip>
                    <Typography variant="body1">
                        &nbsp; renchifrabelle@gmail.com
                    </Typography>
                </Stack>   

            </Stack>

        </CardContent>

        <Divider />

        </Card>

    );
};

export default PersonalInformation;