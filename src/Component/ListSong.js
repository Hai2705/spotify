import React, { useContext, useState , useEffect } from "react";
import { Songs } from "../Context";

const ListSong = () => {
  const { DataSongs ,handleSetSongs, songs } = useContext(Songs);

  const [idSong, setidSong] = useState(0);
  const handleSongs = (idSong) => {
        setidSong(idSong)
        handleSetSongs(idSong)
  };
  useEffect(() => {
    setidSong(songs.id)
  }, [songs])
  
  return (
    <div className="col-span-2 overflow-scroll">
      <table className="table-auto ml-4 w-[98%] text-white mt-3">
        <thead className="h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Tittle</th>
            <th className="w-[10%]">Author</th>
            <th className="fa fa-download w-[10%] mt-3 mr-3"></th>
          </tr>
        </thead>
        <tbody className="text-gray-500 bg-slate-800 leading-10 ml-5 w-full">
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`hover:bg-slate-600 hover:text-gray-700 ${idSong === song.id && 'text-teal-200' }`  }
              onClick={() => handleSongs(song.id)}
            >
              <th>{index + 1}</th>
              <th className="text-left">{song.name}</th>
              <th>{song.author}</th>
              <th>
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSong;
