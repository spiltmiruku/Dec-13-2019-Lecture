import React from 'react';

const withFilteredProps = (BaseComponent) => 
    ({list, genre}) => {

}

const DisplayList = ({artistList}) => {
    return (
        <div> 
            {artistList.map((artist) => (
                <div className='artist-container' key={artist.name}>
                    <img className='artist-img' src={artist.artistImg} alt={artist.name} />
                    <div className="className">
                        <h3>{artist.name}</h3>
                        <p>{artist.genre}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}