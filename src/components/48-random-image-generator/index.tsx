import { FC, ReactElement, useEffect, useState } from 'react';

const URL = 'https://source.unsplash.com/random/'
const RandomImageGenerator: FC = () => {
    const [images, setImages] = useState<ReactElement[]>([]);

    useEffect(() => {

        const newImages = new Array(15).fill(0).map((i, idx) => {
            const randomSize = Math.floor(Math.random() * 10) + 300;
            const src = `${URL}${randomSize}x${randomSize}`;
            return <img key={idx} src={src} alt={""+idx} />
        })

        setImages(newImages);
    }, [])

    return (
        <main className='randomImageGenerator__container'>
            <h1>Random Image Feed</h1>
            <div className="randomImageGenerator___box">
                {images}
            </div>
        </main>
    )
}

export default RandomImageGenerator;