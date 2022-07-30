import { FC, useEffect, useRef } from 'react';

const CONTENT_NUMBER = 15;
const ScrollAnimation:FC = () => {
    const ref = useRef([])

    useEffect(() => {
        ref.current.forEach(r => {
            if (r.getBoundingClientRect().top < window.innerHeight) {
                r.classList.add('show');
            }
        })

        const handleScroll = (e) => {
            const target = e.currentTarget.innerHeight;
            ref.current.forEach(r => {
                if (r.getBoundingClientRect().top < target) {
                    r.classList.add('show');
                } else {
                    r.classList.remove('show');
                }
            })
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <div className='scroll__container'>
            <h1>Scroll to see the animation</h1>
            {Array.from(Array(CONTENT_NUMBER).keys()).map(i => (
                <div
                    key={i}
                    className='box'
                    ref={e => ref.current[i] = e}>
                    <h2>Content</h2>
                </div>
            ))}
        </div>
    )
}

export default ScrollAnimation;