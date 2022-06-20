import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import ReactAudioPlayer from 'react-audio-player';
import Link from 'next/link';
import { useRouter } from 'next/router';

const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background:
      'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
  },
  '&:after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    background:
      'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
    transform: 'rotate(30deg)',
  },
});

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

// const TinyText = styled(Typography)({
//   fontSize: '0.75rem',
//   opacity: 0.38,
//   fontWeight: 500,
//   letterSpacing: 0.2,
// });

export const Audiio = ({ song }) => {
  const theme = useTheme();


  const duration = 200; // seconds
  const [position, setPosition] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }


  const [id, setId] = React.useState(null)




  // React.useEffect(()=>{


  // },[song])




  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  const [audioVolume, setAudioVolume] = React.useState(100)

  const audioRef = React.useRef()
  const [New, setNew] = React.useState(1)






  React.useEffect(() => {

    if (song) {

      audioRef.current.volume = audioVolume / 100
    }

  }, [audioVolume])

  React.useEffect(() => {



    if (song) {

      if (paused) {

        audioRef.current.play()

      } else {

        audioRef.current.pause()
      }
    }
  }, [paused])

  const router = useRouter()









  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Widget>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CoverImage>
            <img
              alt="Meditation"
              src={song?.image}
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <h2 variant="caption" color="text.secondary" fontWeight={500}>
              Guided Meditation
            </h2>
            <h1 className='font-bold' noWrap>
              <b>10 min to fully meditate</b>
            </h1>
            <h3 className='font-semibold text-gray-600' noWrap letterSpacing={-0.25}>
              Imane's Playlist
            </h3>
          </Box>
        </Box>
        <ReactAudioPlayer
          src='https://firebasestorage.googleapis.com/v0/b/amethyst-e71d3.appspot.com/o/audios%2FMorning%20Meditation%20to%20Spark%20Your%20Passion.mp3?alt=media&token=a227fbe2-8042-4e37-8681-1afe3c629a48'
        />
        {/* <audio 
        className='hidden'
        src="https://firebasestorage.googleapis.com/v0/b/amethyst-e71d3.appspot.com/o/audios%2FMorning%20Meditation%20to%20Spark%20Your%20Passion.mp3?alt=media&token=a227fbe2-8042-4e37-8681-1afe3c629a48"> */}

        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value)}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                  ? 'rgb(255 255 255 / 16%)'
                  : 'rgb(0 0 0 / 16%)'
                  }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
        {/* </audio> */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <div className='font-normal text-sm'>{formatDuration(position)}</div>
          <div className='font-normal text-sm'>-{formatDuration(duration - position)}</div>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
          }}
        >
                    <a href={`/playlist/song/${+song?.id - 1}`}>

            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </a>
          <IconButton
            aria-label={paused ? 'play' : 'pause'}
            onClick={() => setPaused(!paused)}
          >
            {!paused ? (
              <PlayArrowRounded
                sx={{ fontSize: '3rem' }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
            )}
          </IconButton>
          <a href={`/playlist/song/${+song?.id + 1}`}>
            <IconButton

              aria-label="next song">

              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
          </a>
        </Box>
        <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
          <VolumeDownRounded htmlColor={lightIconColor} />
          <Slider
            aria-label="Volume"
            defaultValue={audioVolume}
            value={audioVolume}
            onChange={(e) => setAudioVolume(e.target.value)}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
                backgroundColor: '#fff',
                '&:before': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
                },
              },
            }}
          />
          <VolumeUpRounded htmlColor={lightIconColor} />
        </Stack>
        {(song && New) &&

          <audio className="hidden" ref={audioRef} controls>

            <source src={song?.src} type="audio/ogg" />
          </audio>
        }
      </Widget>
      <WallPaper />
    </Box>
  );
}
