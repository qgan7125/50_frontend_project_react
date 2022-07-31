import { FC, useState, DragEvent } from 'react';

const BOX_NUMBER = 5;
const FIRST_POSITION = 0;
const DragNdrap:FC = () => {
    const [dropped, setDropped] = useState(false);

    const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
        const currentNode = e.currentTarget;
        currentNode.className += ' hold';
        setTimeout(() => currentNode.className = 'invisible', 0);
        setDropped(false);
    }

    // dragEnd event happens after drop event
    const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
        if(!dropped){
            e.currentTarget.className = 'fill';
        }
    }

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const handledragEnter = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.currentTarget.className += " hovered";
    }

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.currentTarget.className = e.currentTarget.className.split(" ")[0];
    }

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        setDropped(true);
        e.currentTarget.className = e.currentTarget.className.split(" ")[0];
        e.currentTarget.children[0].className ='fill';
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