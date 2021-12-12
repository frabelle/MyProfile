import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography
  } from '@mui/material';

const About = () => {
    return(
        <Card elevation='12'>

            <CardContent>
                <Typography variant="h5" component="div">
                    About me
                </Typography>

                <br/>

                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque euismod auctor urna. Nam in molestie enim. Nunc in mi hendrerit, 
                    malesuada erat sed, sagittis orci. Sed et mattis elit. Nulla nec fermentum elit, 
                    at hendrerit massa. Sed at mi magna. Morbi justo tortor, dapibus nec ipsum non, 
                    pellentesque dapibus sapien. Praesent nec dapibus diam, id efficitur dui. Sed non 
                    urna non nulla euismod dictum eu at metus. Nulla nec fermentum elit, 
                    at hendrerit massa. Sed at mi magna. Morbi justo tortor, dapibus nec ipsum non, 
                    pellentesque dapibus sapien. Praesent nec dapibus diam, id efficitur dui. Sed non 
                    urna non nulla euismod dictum eu at metus. Nulla nec fermentum elit, 
                    at hendrerit massa. Sed at mi magna.
                </Typography>
            </CardContent>

            <Divider />

        </Card>

    );
};

export default About;