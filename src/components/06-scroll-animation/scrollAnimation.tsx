import { FC, useEffect, useRef } from 'react';

const CONTENT_NUMBER = 15;

const ScrollAnimation: FC = () => {
    const ref = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        ref.current.forEach(r => {
            if (r) {
                if (r?.getBoundingClientRect()?.top < window.innerHeight) {
                    r?.classList?.add('show');
                }
            }
        })

        const handleScroll = (e: Event) => {
            const { innerHeight: target } = e.currentTarget as Window;
            ref.current.forEach(r => {
                if(r){
                    if (r?.getBoundingClientRect()?.top < target) {
                        r?.classList?.add('show');
                    } else {
                        r?.classList?.remove('show');
                    }
                }
            })
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <main className='scroll__container'>
            <h1>Scroll to see the animation</h1>
            {Array.from(Array(CONTENT_NUMBER).keys()).map(i => (
                <div
                    key={i}
                    className='box'
                    ref={e => ref.current[i] = e}>
                    <h2>Content</h2>
                </div>
            ))}
        </main>
    )
}

export default ScrollAnimation;