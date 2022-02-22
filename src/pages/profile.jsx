import { Box, Grid, Container, Typography, Divider } from '@mui/material';
import About from '../components/profile/about'
import PersonalInformation from '../components/profile/information';
import CardInfo from '../components/profile/cardinfo';
import { VerticalAlignBottom } from '@mui/icons-material';

const Profile = () => {
    return(

        <Container maxWidth="xl" sx={{ py:5 }} > 

            <Grid container spacing={{lg:'15', md:'15', xs:'20'}} 
                alignItems="center" justifyContent="center" direction="row">

                <Grid item xs={12} md={4} lg={3.5} display="flex" 
                alignItems="center" justifyContent="center">
                    <CardInfo/>
                </Grid>

                <Grid item xs={12} md={4} lg={3.5} display="flex" 
                alignItems="center" justifyContent="center">
                    <CardInfo/>
                </Grid>

                <Grid item xs={12} md={4} lg={3.5} display="flex" 
                alignItems="center" justifyContent="center">
                    <CardInfo/>
                </Grid>

                <Grid item xs={12} md={4} lg={3.5} display="flex" 
                alignItems="center" justifyContent="center">
                    <CardInfo/>
                </Grid>

                <Grid item xs={12} md={4} lg={3.5} display="flex" 
                alignItems="center" justifyContent="center">
                    <CardInfo/>
                </Grid>

                <Grid item xs={12} md={4} lg={3.5} display="flex" 
                alignItems="center" justifyContent="center">
                    <CardInfo/>
                </Grid>

            </Grid>

      </Container>

    );
};

export default Profile;