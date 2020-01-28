import React from 'react';

const Song = ({ name, artist }) => {

    return (
        <>
            <h4>{name}</h4>
            <p>{artist}</p>
        </>

    )

}

export default Song;