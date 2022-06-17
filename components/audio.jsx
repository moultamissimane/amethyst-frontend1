import React, { useState } from "react";

import SliderCP from "../components/SliderCP"
// import SkipNextIcon from '@mui/icons-material/SkipNext'
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import FastForwardRounded from '@mui/icons-material/FastForwardRounded'
import FastRewindRounded from '@mui/icons-material/FastRewindRounded'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import PauseRounded from '@mui/icons-material/PauseRounded'
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded'
// import { styled, useTheme } from '@mui/material/styles';

// const theme = useTheme();

export const Audio = () => {
  // const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const [paused, setPaused] = useState(false);
  return (
    <div className="">
      <div className="m-auto">
        <video
          className="flex z-20 h-screen w-screen items-center justify-center object-cover"
          autoPlay
          loop
          muted
        >
          <source src="../../images/bgaudio.mp4" type="video/mp4" />
        </video>
        <div>

          <div className="z-10 bg-white -mt-20  cursor-pointer justify-center space-y-4">
            {/* <Box
              sx={{
                width: 100,
                height: 100,
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            /> */}
            <div className="backdrop-blur-md grid grid-row-2 justify-center bg-white w-full mb-5 p-8  ">
              <SliderCP />
              <div className=" flex justify-center pb-20">
                <IconButton aria-label="previous song">
                  <FastRewindRounded fontSize="large" />
                </IconButton>

                <IconButton
                  aria-label={paused ? 'play' : 'pause'}
                  onClick={() => setPaused(!paused)}
                >
                  {paused ? (
                    <PlayArrowRounded
                      sx={{ fontSize: '3rem' }}

                    />
                  ) : (
                    <PauseRounded sx={{ fontSize: '3rem' }} />
                  )}
                </IconButton>
                <IconButton aria-label="next song">
                  <FastForwardRounded fontSize="large" />
                </IconButton>
                {/* <PlayCircleOutlineIcon /> */}
                {/* <SkipNextIcon /> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}


