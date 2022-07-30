import { FC, ReactNode, MouseEvent, useState, useEffect } from 'react';

interface IPosition {
    x?: number,
    y?: number
}

let counter = 0;
const ButtonRippleEffect: FC = () => {
    const [position, setPosition] = useState<IPosition>({});
    const [ripples, setRipples] = useState<ReactNode[]>([]);

    const handleClick = (e: MouseEvent) => {
        const { offsetX, offsetY } = e.nativeEvent;
        setPosition({ x: offsetX, y: offsetY });
    }

    useEffect(() => {
        if (Object.keys(position).length > 0) {
            const newRipple = (
                <div
                    key={counter++}
                    style={{//position
                        left: position.x,
                        top: position.y,
                        transform: "translate(-50%,-50%)"
                    }}
                    className="circle"
                    onAnimationEnd={() => {
                        setRipples(prev => {
                            let nextRippleArr = [...prev];
                            nextRippleArr.shift();
                            return nextRippleArr;
                        })
                    }}
                >
                </div>
            )
            setRipples(prev => [...prev, newRipple]);
        }
    }, [position]);

    return (
        <div className='buttonRippleEfect__container'>
            <button onClick={handleClick}>
                Click me
                {ripples}
            </button>
        </div>
    )
}


export default ButtonRippleEffect