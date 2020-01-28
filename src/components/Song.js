import React from 'react';
import './Song.css'

const Song = ({ name, artist,image,audio }) => {

    return (
        <li className="song">
            <h3>{name}</h3> 
            <h4>{artist}</h4>
            <img src={image}/>
            <audio controls>
                <source src={audio} type="audio/mp4"></source>
            </audio>
        </li>
 
    )

}

export default Song;