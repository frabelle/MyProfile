import { Box, Grid, Container, Typography, Divider } from '@mui/material';
import About from '../components/profile/about'
import PersonalInformation from '../components/profile/information';

const Profile = () => {
    return(

        <Container maxWidth="xl" sx={{ pb: 5, py:4 }}>

            <Grid container spacing={3}>
    
                <Grid item xs={12} md={6} lg={8}>
                    <About />
                </Grid>
        
                <Grid item xs={12} md={6} lg={4}>
                    <PersonalInformation />
                </Grid>
    
            </Grid>
      </Container>

    );
};

export default Profile;