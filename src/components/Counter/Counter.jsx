import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const Counter = ({ initialValue }) => {
    const getValidInitialState = () => {
      if (Number.isInteger(initialValue)) {
        return initialValue;
      }
      return 0;
    };
    const [ count, setCount ] = useState(getValidInitialState);

    /*useEffect(() => {
      if(Number.isInteger(initialValue)) {
        setCount(initialValue);
      }
    }, []);*/

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
