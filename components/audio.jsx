import React, {useState} from "react";

import AudioProp from "../components/AudioProp";
import Play from "../components/Play";
import Pause from "../components/Pause";
import SliderCP from "../components/SliderCP";
import useAudioPlayer from '../components/useAudioPlayer';

export const  Audio = () => {
  const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();

  return (
    <div className="player">
      <audio id="audio">
        <source src="https://firebasestorage.googleapis.com/v0/b/amethyst-e71d3.appspot.com/o/X2Download.com%20-%20The%20Chainsmokers%20-%20Something%20Different%20(Official%20Lyric%20Video)%20(192%20kbps).mp3?alt=media&token=aed85a1f-99ea-446a-a60c-405f369c0579" type="audio/ogg"
         />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <AudioProp songName="Deep Meditation" songArtist="Daft Punk ft. Julian Casablancas" />
      <div className="controls">
        {playing ? 
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        }
        <SliderCP curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)}/>
      </div>
    </div>
  );
}


