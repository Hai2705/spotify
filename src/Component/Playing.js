import React, { useContext } from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from "../Context";
const Playing = () => {
    const {songs , handleSetSongs} = useContext(Songs)
    const handleNext = () =>{
        handleSetSongs(songs.id + 1)
    }
    const handPrevious = () =>{
        handleSetSongs(songs.id - 1 )
    }
  return (
    <div>
      <AudioPlayer className="playing-music" src={songs.url} layout="stacked-reverse" showSkipControls={true} showJumpControls={false}
        onClickNext={handleNext}
        onClickPrevious={handPrevious}
       />
    </div>
  );
};

export default Playing;
