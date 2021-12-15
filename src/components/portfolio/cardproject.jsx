import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Typography, Chip, Stack } from '@mui/material';
import TestImage from '../../image/portfolio/sample.jpg'
import { styled } from '@mui/material/styles';

const Item = styled(Chip)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    backgroundColor:'#9b87bc',
    color: '#ffffff'
  }));

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        height="280"
        image={TestImage}
        alt="green iguana"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          Project's Name
        </Typography>

        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet eros diam, 
        vel lacinia nulla iaculis id. Suspendisse sodales maximus tempus. 
        Nam vel rhoncus odio. Vestibulum mollis nunc vestibulum erat consequat, accumsan laoreet lacus mollis.
        </Typography>

        <br/>

        <Stack direction="row" spacing={2}>
            <Item label="C#"/>
            <Item label="MVC"/>
            <Item label="Javascript"/>
            <Item label="Web development"/>      
        </Stack>
        
      </CardContent>
      
        <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2,
            marginTop: '-20px'
        }}>  
            <Button size="small">Learn More</Button>
        </Box>

    </Card>
  );
}
