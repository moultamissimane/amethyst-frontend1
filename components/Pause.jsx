import React from "react"
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'

export const Pause = (props) => {
  const { handleClick } = props;
  
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PauseCircleOutlineIcon />
    </button>
  );
}
