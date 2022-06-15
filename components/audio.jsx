import React, { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import PauseRounded from '@mui/icons-material/PauseRounded'
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded'
import FastForwardRounded from '@mui/icons-material/FastForwardRounded'
import FastRewindRounded from '@mui/icons-material/FastRewindRounded'
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded'
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SliderCP from './SliderCP'

// const WallPaper = styled('div')({
//   position: 'absolute',
//   width: '100%',
//   height: '100%',
//   top: 0,
  // left: 0,
//   overflow: 'hidden',
//   // background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
//   transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
//   '&:before': {
//     content: '""',
//     width: '140%',
//     height: '140%',
//     position: 'absolute',
//     top: '-40%',
//     right: '-50%',
//     // background:
//     //   'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
//   },
//   '&:after': {
//     content: '""',
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//     bottom: '-50%',
//     left: '-30%',
//     // background:
//     //   'radial-gradient(at center center, rgb(67, 7, 107) 0%, rgba(67, 7, 107, 0) 60%)',
//     transform: 'rotate(30deg)',
//   },
// });

// const Widget = styled('div')(({ theme }) => ({
//   padding: 16,
//   borderRadius: 16,
//   width: 343,
//   maxWidth: '100%',
//   margin: 'auto',
//   position: 'relative',
//   zIndex: 1,
//   backgroundColor:
//     theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
//   backdropFilter: 'blur(30px)',
// }));

// const CoverImage = styled('div')({
//   width: 100,
//   height: 100,
//   objectFit: 'cover',
//   overflow: 'hidden',
//   flexShrink: 0,
//   borderRadius: 8,
//   backgroundColor: 'rgba(0,0,0,0.08)',
//   '& > img': {
//     width: '100%',
//   }
// });

export default function Audio() {

  const [currentaudioIndex, setCurrentaudioIndex] = useState(0);
  const [nextaudioIndex, setNextaudioIndex] = useState(currentaudioIndex + 1);

  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = useState(32);
  const [paused, setPaused] = useState(false);



  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  return (
    <div className="bg-black relative flex min-h-screen min-w-full items-center justify-center overflow-auto blur-xl">
      <div style={{
        backgroundImage: "url('/images/Sea2Playlist.jpg')",
      }}
        className=' flex h-screen w-screen justify-center items-center  bg-center bg-cover'>
        <div className='z-50 flex justify-center items-center -mt-10 lg:w-6/12 lg:py-24 xl:py-32 '>
          <ArrowBackIcon className='z-50 absolute top-3  left-3 ' />
          <audio
            controls
            src="https://firebasestorage.googleapis.com/v0/b/amethyst-e71d3.appspot.com/o/X2Download.com%20-%20The%20Chainsmokers%20-%20Something%20Different%20(Official%20Lyric%20Video)%20(192%20kbps).mp3?alt=media&token=aed85a1f-99ea-446a-a60c-405f369c0579" type="audio/ogg"
          >
            <SliderCP />
          </audio>
        </div>
      </div>
    </div>


  );
}
    //     <Box sx={{ width: '100%', overflow: 'hidden', mt: 32 }}>
    //       {/* <WallPaper > */}
    //       {/* </WallPaper> */}
    //       <Widget>

    //         <Box sx={{ display: 'flex', alignItems: 'center' }}>
    //           <CoverImage>
    //             <img
    //               alt="can't win - Chilling Sunday"
    //               src="/images/Sea2Playlist.jpg"
    //             />
    //           </CoverImage>

    //           <div className='ml-4 mt-5'>
    //             <h3>Jun Pulse</h3>
    //             {/* <div > */}
    //             <h2 className='font-bold'>ighliuhil (Cant win)</h2>
    //             {/* </div> */}
    //             {/* <div > */}
    //             <br />
    //             Chilling Sunday &mdash; gluhl
    //             {/* </div> */}
    //           </div>
    //           <Box sx={{ ml: 1.5, minWidth: 0 }}>
    //             {/* <div >
    //               Jun Pulse
    //             </div> */}
    //           </Box>
    //         </Box>
    //         <audio
    //           onChange={(_, value) => setPosition(value)}

    //         >

    //         </audio>
    //         {/* <Slider
    //           // <audio controls>


    //           //</audio>
    //           aria-label="time-indicator"
    //           size="small"
    //           value={position}
    //           min={0}
    //           step={1}
    //           max={duration}
    //           onChange={(_, value) => setPosition(value)}
    //           sx={{
    //             color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
    //             height: 4,
    //             '& .MuiSlider-thumb': {
    //               width: 8,
    //               height: 8,
    //               transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    //               '&:before': {
    //                 boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
    //               },
    //               '&:hover, &.Mui-focusVisible': {
    //                 boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
    //                 ? 'rgb(255 255 255 / 16%)'
    //                   : 'rgb(0 0 0 / 16%)'
    //                 }`,
    //               },
    //               '&.Mui-active': {
    //                 width: 20,
    //                 height: 20,
    //               },
    //             },
    //             '& .MuiSlider-rail': {
    //               opacity: 0.28,
    //             }
    //           }}

    //         /> */}
    //         <Box
    //           sx={{
    //             display: 'flex',
    //             alignItems: 'center',
    //             justifyContent: 'space-between',
    //             mt: -2,
    //           }}
    //         >
    //           <div>{formatDuration(position)}</div>
    //           <div>-{formatDuration(duration - position)}</div>
    //         </Box>
    //         <Box
    //           sx={{
    //             display: 'flex',
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //             mt: -1,
    //           }}
    //         >
    //           <IconButton aria-label="previous audio">
    //             <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
    //           </IconButton>

    //           <IconButton
    //             onPlay={(e) => console.log("onPlay")}
    //             aria-label={paused ? 'play' : 'pause'}
    //             onClick={() => setPaused(!paused)}
    //           >
    //             {paused ? (
    //               <PlayArrowRounded
    //                 sx={{ fontSize: '3rem' }}
    //                 htmlColor={mainIconColor}
    //               />
    //             ) : (
    //               <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
    //             )}
    //           </IconButton>
    //           <IconButton aria-label="next audio">
    //             <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
    //           </IconButton>
    //         </Box>
    //         <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
    //           <VolumeDownRounded htmlColor={lightIconColor} />
    //           <Slider
    //             aria-label="Volume"
    //             defaultValue={30}
    //             sx={{
    //               color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
    //               '& .MuiSlider-track': {
    //                 border: 'none',
    //               },
    //               '& .MuiSlider-thumb': {
    //                 width: 24,
    //                 height: 24,
    //                 backgroundColor: '#fff',
    //                 '&:before': {
    //                   boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
    //                 },
    //                 '&:hover, &.Mui-focusVisible, &.Mui-active': {
    //                   boxShadow: 'none',
    //                 },
    //               },
    //             }}
    //           />
    //           <VolumeUpRounded htmlColor={lightIconColor} />
    //         </Stack>
    //       </Widget>

    //       <SliderCP />


    //     </Box>

