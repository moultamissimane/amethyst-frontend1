import  React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import moment from "moment"


// import { black } from '@mui/material/colors'



export const SliderCP = (props) => {
  const { duration, curTime, onTimeUpdate } = props
  
    const curPercentage = (curTime / duration) * 100
  
    function formatDuration(duration) {
      return moment
        .duration(duration, "seconds")
        .format("mm:ss", { trim: false });
    }
  
    function calcClickedTime(e) {
      const clickPositionInPage = e.pageX;
      const bar = document.querySelector(".bar__progress")
      const barStart = bar.getBoundingClientRect().left + window.scrollX
      const barWidth = bar.offsetWidth;
      const clickPositionInBar = clickPositionInPage - barStart
      const timePerPixel = duration / barWidth
      return timePerPixel * clickPositionInBar
    }
  
    function handleTimeDrag(e) {
      onTimeUpdate(calcClickedTime(e))
  
      const updateTimeOnMove = eMove => {
        onTimeUpdate(calcClickedTime(eMove))
      };
  
      document.addEventListener("mousemove", updateTimeOnMove)
  
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", updateTimeOnMove)
      });
    }

  return (
    <div className="bar">
      <span className="bar__time">{formatDuration(curTime)}</span>
      <div
        className="bar__progress"
        style={{
          background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}
      >
        <span
          className="bar__progress__knob"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className="bar__time">{formatDuration(duration)}</span>
    </div>
    );
  }
  
  // <Box sx={{ width: 300 }}>
  //   <Slider
  //     aria-label="Temperature"
  //     defaultValue={30}
  //     getAriaValueText={valuetext}
  //     sx={{ color: 'black '}}
  //   />
  // </Box>