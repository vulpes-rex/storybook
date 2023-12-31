import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from "../Button/Button";

export default function Counter({color}) {
    const [count, setCount] = useState(0);
    
    const handleOnClick = (evtType) => {
        if(evtType==='ADD') {
            setCount(count+1);
            return;
        }
        setCount(count-1)
    }

    return (
        <>
            <span style={{color}}>Counter: {count}</span><br/>
            <Button 
                label="+" 
                onClick={() => handleOnClick("ADD")} 
                backgroundColor="#2b860b" />
            <Button 
                label="-" 
                onClick={() => handleOnClick()} 
                backgroundColor="#2b860b" />
        </>
    )
}

Counter.propTypes = {
    color: PropTypes.string
}