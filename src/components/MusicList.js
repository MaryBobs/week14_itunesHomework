import React from 'react';
import Song from './Song';
import './MusicList.css';

const MusicList = ( {songs} ) => {

    const songList = songs.map((song) => {
        return (
            <Song name={song['im:name'].label}
                artist={song['im:artist'].label}
                key={song.id.attributes['im:id']}
                image={song['im:image'][2].label}
                audio={song.link[1].attributes.href} />
        )
    })
    

    return (
        <ol>
            {songList}
        </ol> 
    )
}

export default MusicList;