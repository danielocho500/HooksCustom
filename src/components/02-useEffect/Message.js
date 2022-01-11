import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coord, setCoord] = useState({x: 0, y:0});

    const {x,y} = coord;

    const coordEvent = ({x,y}) => {
        setCoord({x,y});
    }

    useEffect(() => {
        
        window.addEventListener('mousemove',coordEvent);

        return () => {
            window.removeEventListener('mousemove',coordEvent);
        }
    }, [])

    return (
        <div>
            <h3> Eres genial </h3>
            <p> X: {x} Y: {y}</p>
            <br/>
        </div>
    )
}
