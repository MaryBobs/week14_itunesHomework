import React from 'react';

const Song = ({ name, artist,image,audio }) => {

    return (
        <li>
            <h4>{name}</h4>
            <p>{artist}</p>
            <img src={image}/>
            <audio controls>
                <source src={audio} type="audio/mp4"></source>
            </audio>
        </li>
 
    )

}

export default Song;