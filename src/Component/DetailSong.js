import React, { useContext } from 'react';
import { Songs } from '../Context';

const DetailSong = () => {
    const {songs} = useContext(Songs)
    return (
        <div className='col-span-1'>
            <div className='mt-4 -ml-[20px]'>
            <h2 className='text-sky-500 text-xl mr-[50px]'>Now playing</h2>
            <h1 className='inline-block text-3xl -ml-16 text-gray-400'>{songs.name}</h1>
            </div>
            <div className='ml-20 mt-10'>
                <img className='w-[240px]' alt='detail-img' src={songs.links.images[0].url}/>
                <div className='flex items-center mt-4'>
                <img className='w-[70px] rounded-full mx-5' alt='detail-img' src={songs.links.images[1].url}/>
                <h2>{songs.author}</h2>
                </div>
            </div>
        </div>
    );
};

export default DetailSong;