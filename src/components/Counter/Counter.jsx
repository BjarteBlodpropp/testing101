import React, { useState } from 'react';
import styles from './styles.module.scss';
////"test": "react-scripts test",
const Counter = () => {
    const [ count, setCount ] = useState(0);

    const _incrementCount = () => {
        setCount(count + 1);
    };

    const _decrementCount = () => {
        setCount(count - 1);
    };


    return (
        <div className={styles.counterContainer} data-test='counterContainer'>
            <h1>Count:</h1>
            <h1 data-test='countAmount'>{ count }</h1>

            <button data-test='decrementButton' className={styles.button} onClick={_decrementCount}>-</button>
            <button data-test='incrementButton' className={styles.button} onClick={_incrementCount}>+</button>
        </div>
    )
};

export default Counter;