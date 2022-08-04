import { FC, useState, useEffect } from 'react';
import Pagination from '../pagination/pagination';
import Pokemon from './pokemon/pokemon';

interface IPokemon {
    id: string,
    name: string,
    sprite: string,
    types: string[]
}

interface IPagination {
    startIndex: number,
    maxResult: number,
    totalItems: number
}

const PokeDev: FC = () => {
    const [pokemons, setPokemon] = useState<IPokemon[]>([]);
    const [pages, setPage] = useState<IPagination>({
        startIndex: 1,
        maxResult: 60,
        totalItems: 900
    });

    const fetchData = async (url: string) => {
        await fetch(url)
            .then(res => res.json())
            .then(res => {
                const {
                    id,
                    name,
                    types,
                    sprites: {
                        front_default:
                        sprite
                    } }: {
                        id: string,
                        name: string,
                        types: { type: { name: string } }[],
                        sprites: { front_default: string }
                    } = res;
                setPokemon(prev => [...prev, { id, name, sprite, types: types.map(type => type.type.name) }]);
            })
    }

    const handleclickPage = (page: number) => {
        setPage(rest => ({ ...rest, startIndex: page }));
    }

    useEffect(() => {
        const getAllPokemon = async () => {
            const idx = (pages.startIndex - 1) * pages.maxResult + 1
            for (let i = idx; i < idx + pages.maxResult; i++) {
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                await fetchData(url);
            }
        }


        getAllPokemon();
        return () => {
            setPokemon([]);
        }
    }, [pages.startIndex, pages.maxResult])

    return (
        <main className='pokeDev__container'>
            <h1>PokeDev</h1>
            <Pagination {...pages} handlePage={handleclickPage} />
            <section className='pokemons__container'>
                {pokemons.map(pokemon => (
                    <Pokemon key={pokemon.name} {...pokemon} />
                ))}
            </section>
            <Pagination {...pages} handlePage={handleclickPage} />
        </main>
    )
}

export default PokeDev;