import { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Pagination from '../pagination/pagination';
import MovieItem from './movieItem/movieItem';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


interface IContent {
    title: string,
    overview: string,
    poster_path: string,
    vote_average: number
}

interface IPages {
    startIndex: number,
    totalItems: number,
    maxResult: number
}

const MovieApp: FC = () => {
    const [search, setSearch] = useState("");
    const [contents, setcontents] = useState<IContent[]>([]);
    const [pages, setPages] = useState<IPages>({
        startIndex: 1,
        maxResult: 20,
        totalItems: 34591
    })

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setPages(prev => ({ ...prev, startIndex: 1 }))
        fetchData(search.trim() ? SEARCH_API + search : API_URL);
    }

    const fetchData: (URL: string) => void = async (URL) => {
        await fetch(URL)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw Error(res.status + "");
                }

            })
            .then(res => {
                setPages(prev => ({ ...prev, totalItems: res.total_results }))
                setcontents(res.results);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        if (search.trim().length > 0) {
            fetchData(SEARCH_API + search + `&page=${pages.startIndex}`);
        } else {
            fetchData(API_URL + `&page=${pages.startIndex}`);
        }
    }, [pages.startIndex])

    const handleclickPage = (page: number) => {
        setPages(rest => ({ ...rest, startIndex: page }));
    }

    return (
        <main className='movieApp__container'>
            <header>
                <form className='nav' onSubmit={handleSubmit}>
                    <input onChange={handleSearch} placeholder='Search' value={search} />
                </form>
            </header>
            <div className='pagination'>
                <Pagination {...pages} handlePage={handleclickPage} />
            </div>
            <section className='movieApp__contents'>
                {contents.map(content => (
                    <MovieItem key={content.title + Math.random()} {...content} />
                ))}
            </section>
            <div className='pagination'>
                <Pagination {...pages} handlePage={handleclickPage} />
            </div>
        </main>
    )
}

export default MovieApp;