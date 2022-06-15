import  React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// import { black } from '@mui/material/colors'

function valuetext(value) {
  return `${value}°C`;
}

export default function SliderCP() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        sx={{ color: 'black '}}
      />
    </Box>
  );
}
