import React from 'react';
import { Typography, Grid } from '@mui/material';
import Coding from '../image/utils/coding.png'

export default function WipPage() {
    
    return(

        <div className='centerContainer'>

            <Grid direction="column" margin="20px">

                <Grid textAlign={"center"}>
                    <img
                    src={Coding}
                    alt="Work in Progress"
                    width={'50%'}/> 
                </Grid>

                <Grid>
                    <Typography variant="h6" color="primary.contrastText" textAlign={"center"}>
                        I'm still working on this page, but it will be up soon 🤍<br></br> 
                        Sorry for the inconvenience!
                    </Typography>
                </Grid>

            </Grid>

        </div>

    );
};
