import { FC, useState } from 'react';

const BOX_NUMBER = 5;
const FIRST_POSITION = 0;
const DragNdrap:FC = () => {
    const [dropped, setDropped] = useState(false);

    const handleDragStart = (e) => {
        e.target.className += ' hold';
        setTimeout(() => e.target.className = 'invisible', 0);
        setDropped(false);
    }

    // dragEnd event happens after drop event
    const handleDragEnd = (e) => {
        if(!dropped){
            e.target.className = 'fill';
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handledragEnter = (e) => {
        e.preventDefault();
        e.target.className += " hovered";
    }

    const handleDragLeave = (e) => {
        e.target.className = e.target.className.split(" ")[0];
    }

    const handleDrop = (e) => {
        setDropped(true);
        e.target.className = e.target.className.split(" ")[0];
        e.target.childNodes[0].className ='fill';
    }

    return (
        <div className='dragNdrop__container'>
            {Array.from(Array(BOX_NUMBER).keys()).map(box => (
                <div
                    id={box.toString()}
                    key={box}
                    className='empty'
                    onDragOver={handleDragOver}
                    onDragEnter={handledragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}>
                    <div
                        className={box === FIRST_POSITION ? 'fill' : "invisible"}
                        draggable={true}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DragNdrap;