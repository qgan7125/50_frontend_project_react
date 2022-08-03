import { FC, MouseEvent } from "react";

const SQUARES = 500;
const HoverBoard: FC = () => {

    const handleMoveOver = (e: MouseEvent<HTMLDivElement>) => {
        e.currentTarget.classList.add(`square-color${Math.floor(Math.random() * 5)}`);
    }

    const handleMoveOut = (e: MouseEvent<HTMLDivElement>) => {
        e.currentTarget.className = "square";
    }

    return (
        <main className="hoverBoard__container">
            <section className="board">
                {
                    Array.from(Array(SQUARES).keys()).map(i => (
                        <div
                            key={i}
                            className="square"
                            onMouseOver={handleMoveOver}
                            onMouseOut={handleMoveOut} />
                    ))
                }
            </section>
        </main>
    )
}

export default HoverBoard;