import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';

export default function CircleProject (props) {
  return(
      <div style={{textAlign: 'center'}}>
           <img
                className="imgIcons"
                src={props.image}
                alt="imagen de prueba"
            />
            <Typography variant="overline" display="block" gutterBottom>
                {props.name}
            </Typography>
      </div>
  );
  };