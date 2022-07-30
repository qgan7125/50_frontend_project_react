import { FC } from 'react';

interface IMovieInfo {
    title: string, 
    overview: string, 
    poster_path: string, 
    vote_average: number

}
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const MovieItem:FC<IMovieInfo> = ({ title, overview, poster_path, vote_average }) => {
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