import PropTypes from 'prop-types';
import { useMemo } from 'react';


export const UseMemo = ({count, setCount}) => {
  
    const doubledCount = useMemo(() => {
        return count * 2;
    }, [count]);
    
    const handleSquare = () => {
        alert(`Square of Count is: ${count * count}`);
    };
  
    return (
    <div>
        <h2>Excercise Hook UseMemo</h2>
        <button className='increment-button' onClick={() => setCount(count + 1)}>
            Increment
        </button>
        <button className='square-button' onClick={handleSquare}>
            Square of Count
        </button>
        <p>Count is {count}</p>
        <p>Double count is {doubledCount}</p>
    </div>
  )
};
UseMemo.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired
}