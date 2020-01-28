import React from 'react';

const Song = ({ name, artist,image }) => {

    return (
        <li>
            <h4>{name}</h4>
            <p>{artist}</p>
            <img src={image}/>
        </li>
 
    )

}

export default Song;