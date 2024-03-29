import { FC, useState, MouseEvent } from 'react';

const CAPACITY_ML = 2000;
const DrinkWater:FC = () => {
    const [bottles, setBottles] = useState<Boolean[]>(new Array(CAPACITY_ML / 250).fill(false));

    const handleClick = (e: MouseEvent) => {
        const { id } = e.currentTarget;
        setBottles([...new Array(+id).fill(true), !bottles[+id], ...new Array(bottles.length - +id - 1).fill(false)])
    }

    return (
        <main className='drinkWater__container'>
            <h1>Drink Water</h1>
            <h4>Goal: 2 Liters</h4>
            <div className='bottle large'>
                <div className='remained' style={{height:  (100 - bottles.filter(b => b).length / bottles.length * 100)+ "%"}}>
                    <div><strong>{(bottles.length - bottles.filter(b => b).length) * 0.25}L</strong></div>
                    <div>Remained</div>
                </div>
                <div className='percentage' style={{height:  bottles.filter(b => b).length / bottles.length * 100+ "%"}}><strong>{bottles.filter(b => b).length / bottles.length * 100}%</strong></div>
            </div>
            <h4>Select how many glasses of water that you have drank</h4>
            <section className='bottles'>
                {bottles.map((bottle, i) => (
                    <button
                        id={i + ""}
                        key={i}
                        className={'bottle small ' + (bottle ? 'active' : "")}
                        onClick={handleClick}>250 <br /> ml</button>
                ))}
            </section>
        </main >
    )
}

export default DrinkWater;