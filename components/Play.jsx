import React from "react"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'

export const Play = (props) => {
  const { handleClick } = props;

  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PlayCircleOutlineIcon />
    </button>
  );
}