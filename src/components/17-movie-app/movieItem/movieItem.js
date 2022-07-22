import React from 'react';
import './movieItem.css';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const MovieItem = (props) => {
    const { title, overview, poster_path, vote_average } = props;
    return (
        <div className='movieItem'>
            <img src={IMG_PATH + poster_path} alt={title} />
            <div className='movieInfo'>
                {title}
                <span className={+vote_average > 8 ? 'highRate' : ""}>{vote_average}</span>
            </div>
            <div className='overview'>
                <h3>Overview</h3>
                {overview}
            </div>
        </div>
    )
}


export default MovieItem;