import { FC, useState, useEffect, useRef } from 'react';

const IMAGES = [
    {
        src: "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
        alt: "first"
    },
    {
        src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        alt: "second"
    },
    {
        src: "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        alt: "third"
    },
    {
        src: "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80",
        alt: "fourth"
    }
]

const ImageCarousel: FC = () => {
    const [idx, setIdx] = useState(0);
    const imgContainerlRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        if (idx === IMAGES.length - 1) {
            setIdx(0)
        }else{
            setIdx(idx + 1)
        }
    }

    const handlePrev= () => {
        if (idx === 0) {
            setIdx(IMAGES.length - 1)
        }else{
            setIdx(idx - 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setIdx(prev => (prev + 1) % IMAGES.length)
        }, 2000)

        return () => clearInterval(interval);
    }, [])

    useEffect( () => {
        if(imgContainerlRef && imgContainerlRef.current) {
            imgContainerlRef.current.style.transform = `translateX(${-idx * 500}px)`
        }
    }, [idx]);

    return (
        <div className='imageCarousel__container'>
            <div className='carousel'>
                <div className="image-container" ref={imgContainerlRef}>
                    {IMAGES.map(img => (
                        <img key={img.alt} src={img.src} alt={img.alt} />
                    ))}
                </div>
                <div className="buttons-container">
                    <button id="left" className="imageCarousel__btn" onClick={handlePrev}>Prev</button>
                    <button id="right" className="imageCarousel__btn" onClick={handleNext}>Next</button>
                </div>
            </div>

        </div>
    )
}

export default ImageCarousel;