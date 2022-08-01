import { FC, useEffect, useState, useRef, ReactNode, AnimationEvent } from 'react';

let counter = 0;
const AnimatedCountdown: FC = () => {
    const [replay, setReplay] = useState(false);
    const [numArr, setNumArr] = useState<ReactNode[]>([]);
    const counterRef = useRef<HTMLDivElement>(null);
    const replayRef = useRef<HTMLDivElement>(null);

    const handleReplay = () => {
        setReplay(true);
    }

    useEffect(() => {
        if (replay) {
            if (counterRef && counterRef.current) {
                counterRef.current.classList.remove("hide");
            }
            if (replayRef && replayRef.current) {
                replayRef.current.classList.remove("show");
            }

            const newSpan = (n: number) => (
                <span
                    key={counter++}
                    className='in'
                    onAnimationEnd={
                        (e: AnimationEvent<HTMLSpanElement>) => {
                            e.currentTarget.classList.remove('in');
                            e.currentTarget.classList.add('out');
                        }
                    }>{n}</span>
            )
                    
            // setTimeout in for-loop does not print consecutive values
            // https://stackoverflow.com/questions/5226285/settimeout-in-for-loop-does-not-print-consecutive-values
            for(let i = 3; i >= 0; i--) {
                setTimeout((j) => {
                    setNumArr(prev => {
                        prev.shift()
                        return [...prev, newSpan(j)]
                    })
                }, (3 - i) * 1000, i);
            }

            setTimeout(() => {
                if (counterRef && counterRef.current) {
                    counterRef.current.classList.add('hide');
                }
                if (replayRef && replayRef.current) {
                    replayRef.current.classList.add("show");
                }
            }, 4000)

            setReplay(false);
        }
    }, [replay]);

    return (
        <div className='animatedCountdown__container'>
            <div className="counter hide" ref={counterRef}>
                <div className='num'>
                    {numArr}
                </div>
                <h4>Get ready</h4>
            </div>
            <div className='final show' ref={replayRef}>
                <h1>Go</h1>
                <button onClick={handleReplay}>Replay</button>
            </div>
        </div>
    )
}

export default AnimatedCountdown;