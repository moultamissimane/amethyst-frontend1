import React, { useState } from 'react'

export default function iiindex() {
    const [songs, setsongs] = useState([
     {
        title: "song 1",
        artist: "artist 1",
        img_src: "../../../public/images/BridgePlaylist.jpg",
        src: "../../../songs/The Chainsmokers - Solo Mission (Official Lyric Video).mp3",
     },
     {
        title: "song 2",
        artist: "artist 2",
        img_src: "../../../public/images/BridgePlaylist.jpg",
        src: "../../../songs/The Chainsmokers - Solo Mission (Official Lyric Video).mp3",
     },
   ]);
    return (
      <div>
        <h1>components here</h1>
      </div>
   );
   }