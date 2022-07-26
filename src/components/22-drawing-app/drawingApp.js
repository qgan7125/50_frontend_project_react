import React, { useState, useRef, useEffect } from 'react';
import './drawingApp.css';

const CANVAS__WIDTH = 800;
const CANVAS__HEIGHT = 800;
const DrawingApp = () => {
    const [size, setSize] = useState(5);
    const [color, setColor] = useState('#000000');
    const [isPressed, setIsPressed] = useState(false);
    const [firstPosition, setFirstPosition] = useState({x: undefined, y: undefined});
    const canvasRef = useRef();

    const handleIncrement = () => {
        if(size === 50){
            return
        }
        setSize(size + 5)
    }

    const handleDecrement = () => {
        if(size === 5) {
            return
        }
        setSize(size - 5)
    }

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    const handleMouseDown = (e) => {
        const { offsetX, offsetY } = e.nativeEvent;
        setIsPressed(true);
        setFirstPosition({x: offsetX, y: offsetY});
        drawCircle(offsetX, offsetY);
    }

    const handleMouseUp= () => {
        setIsPressed(false);
        setFirstPosition({x: undefined, y: undefined});
    }

    const handleMouseMove = (e) => {
        if(isPressed) {
            const { offsetX, offsetY } = e.nativeEvent;
            const x2 = offsetX;
            const y2 = offsetY;
    
            drawCircle(x2, y2);
            drawLine(x2, y2);
    
            setFirstPosition({x: x2, y: y2});
        }
    }

    const drawCircle = (x, y) => {
        const canvas = canvasRef.current;
        if(!canvas) {
            return
        }
        const context = canvas.getContext('2d');
        context.beginPath();
        context.fillStyle = color;
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fill();
    }

    const drawLine = (x2, y2) => {
        const canvas = canvasRef.current;
        if(!canvas) {
            return
        }
        const context = canvas.getContext('2d');
        context.beginPath();
        context.moveTo(firstPosition.x, firstPosition.y);
        context.lineTo(x2, y2);
        context.strokeStyle = color;
        context.lineWidth = size * 2;
        context.stroke();
    }

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if(!canvas) {
            return
        }
        const context = canvas.getContext('2d');
        context.clearRect(0,0, CANVAS__WIDTH, CANVAS__HEIGHT);
    }

    return (
        <div className='drawingApp__container' onMouseUp={handleMouseUp}>
            <div className='drawingApp__canvas--container'>
                <canvas 
                ref={canvasRef} 
                width={CANVAS__WIDTH}
                height={CANVAS__HEIGHT}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}/>
                <div className='drawingApp__tools'>
                    <button onClick={handleDecrement}>-</button>
                    <span>{size}</span>
                    <button onClick={handleIncrement}>+</button>
                    <input type='color' value={color} onChange={handleColor}/>
                    <button onClick={clearCanvas}>&times;</button>
                </div>
            </div>
        </div>
    )
}

export default DrawingApp;