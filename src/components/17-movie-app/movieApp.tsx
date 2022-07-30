import { FC, useState, useEffect } from 'react';
import MovieItem from './movieItem/movieItem';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const MovieApp:FC = () => {
    const [search, setSearch] = useState("");
    const [contents, setcontents] = useState([]);

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(SEARCH_API + search);
    }

    const fetchData: (URL:string) => void = async (URL) => {
        await fetch(URL)
            .then(res => {
                if(res.status === 200){
                    return res.json();
                }else{
                    throw Error(res.status + "");
                }

            })
            .then(res => {
                setcontents(res.results);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchData(API_URL);
    }, [])

    return (
            <div className='movieApp__container'>
                <form className='nav' onSubmit={handleSubmit}>
                    <input onChange={handleSearch} placeholder='Search' value={search} />
                </form>
                <main className='movieApp__contents'>
                    {contents?.map(content => (
                        <MovieItem key={content.title + Math.random()}{...content} />
                    ))}
                </main>
            </div>
    )
}

export default MovieApp;