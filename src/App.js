import { useState } from 'react';
import './App.css';
import DetailSong from './Component/DetailSong';
import ListSong from './Component/ListSong';
import Navbar from './Component/Navbar';
import Playing from './Component/Playing';
import { Songs } from './Context';
import DataSongs from './songs.json';

function App() {
  const [songs , setSongs] = useState(DataSongs[0])
  const handleSetSongs = (idSong) =>{
      const song = DataSongs.find(song => song.id === idSong);
      if(song < 0){
        setSongs(DataSongs[0])
      }
      setSongs(song)
  }
  return (
    <div className="App bg-slate-800 h-24">
        <Songs.Provider value={{ DataSongs , songs , handleSetSongs }}>
        <Navbar/>
        <div className='grid grid-cols-3 bg-slate-700 h-ch-navbar'>
        {/* {span 1} */}
            <DetailSong/>
        {/* {span 2} */}
            <ListSong/>
        </div>
          <Playing/>  
        </Songs.Provider>
    </div>
  );
} 

export default App;
