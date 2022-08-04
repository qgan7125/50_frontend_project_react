import { FC } from 'react';

interface IPokemon {
    id: string,
    name: string,
    sprite: string,
    types: string[]
}

const COLOR_TYPES = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
}

const Pokemon: FC<IPokemon> = ({ id, name, sprite, types }) => {

    const bgString = () => {
        if (types.length >= 2) {
            return `linear-gradient(${types.map(t => COLOR_TYPES[t as keyof typeof COLOR_TYPES]).join(", ")})`;
        }

        return COLOR_TYPES[types[0] as keyof typeof COLOR_TYPES];
    }

    return (
        <div className='pokemon__info' style={{ background: bgString()}}>
            <div className="img-container">
                <img src={sprite} alt={name} />
            </div>
            <div className="info">
                <span className="number">#{id.toString().padStart(3, "0")}</span>
                <h4 className="name">{name}</h4>
                <small className="type">Type:
                    {types.map(type => (
                        <div key={type} style={{ backgroundColor: COLOR_TYPES[type as keyof typeof COLOR_TYPES] }}>{type}</div>
                    ))}
                </small>

            </div>
        </div>
    )
}

export default Pokemon;