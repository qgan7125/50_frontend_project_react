import React, { useState } from 'react';
import './doubleVerticalSlider.css';


const DATA = [
    {
        title: "Nature flower",
        excerpt: "all in pink",
        color: "#FD3555",
        img: "https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80"
    },
    {
        title: "Bluuue Sky",
        excerpt: "with it's mountains",
        color: "#2A86BA",
        img: "https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80"
    },
    {
        title: "Lonely castle",
        excerpt: "in the wilderness",
        color: "#252E33",
        img: "https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80"
    },
    {
        title: "Flying eagle",
        excerpt: "in the sunset",
        color: "#FFB866",
        img: "https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80"
    },
]

const DoubleVerticalSlider = () => {
    const [slider, setSlider] = useState(0);

    const handleUp = () => {
        setSlider((slider + 1) % DATA.length);
    }

    const handleDown = () => {
        if (slider <= 0) {
            setSlider(DATA.length - Math.abs((slider - 1)) % DATA.length);
            return
        }
        setSlider(slider - 1);
    }

    return (
        <div className='doubleVerticalSlider__container'>
            <div className='left--slider' style={{ transform: `translateY(-${((DATA.length - 1) - slider) * 100}vh)` }}>
                {DATA.map(d => (
                    <div key={d.title} style={{ backgroundColor: d.color }}>
                        <h1>{d.title}</h1>
                        <p>{d.excerpt}</p>
                    </div>
                ))}
            </div>
            <div className='right--slider' style={{ transform: `translateY(${-slider * 100}vh)` }}>
                {DATA.map(d => (
                    <div key={d.title + 'img'} style={{ backgroundImage: `url(${d.img})` }}></div>
                ))}
            </div>
            <button className='Down' onClick={handleDown}>
                <i className="fas fa-arrow-down"></i>
            </button>
            <button className='Up' onClick={handleUp}>
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    )
}

export default DoubleVerticalSlider;