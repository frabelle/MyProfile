import React from 'react';
import { Box, Typography, Grid, Card, CardActions, CardContent } from '@mui/material';
import Button from '@mui/material/Button';

export default function CardAchievement (props) {

  return(
      <div>
        <div style={{textAlign: 'center', marginInline: '20px'}}>
            
            <Card variant="outlined" sx={{ maxWidth: 345 }} onClick="href">

            <CardContent>

                <Grid container spacing={10}>

                    <Grid item xs={12} md={12} lg={12} display="flex" 
                        alignItems="center" justifyContent="center">

                        <img
                            width={"50px"}
                            src={props.image}
                            alt="imagen de prueba"
                        />

                    </Grid>

                </Grid>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.type}
                    </Typography>

                    <Typography variant="h5" component="div">
                        {props.name}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.date}
                    </Typography>

                    {/* <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography> */}

                </CardContent>

                <CardActions sx={{marginTop: -4, justifyContent: 'center', marginBottom: 1}}>
                    <Button size="small" href="#">More information</Button>
                </CardActions>

            </Card>
        </div>

    </div>
  );
  };