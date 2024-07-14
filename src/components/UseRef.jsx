import PropTypes from 'prop-types';
import { useRef } from 'react';

export const UseRef = ({count, setCount}) => {
  
    //Crear referencia con useRef para almacenar el elemento con el DOM
    const countRef = useRef();

    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount);
        countRef.current.textContent = `Count in now ${newCount}`;
    }

    const handleDoubleClick = () =>{
        setCount(0);
        countRef.current.textContent = `Count in now 0`;
    }
    
    return (
    <div>
        <h2>Excercise Hook useRef</h2>
        <button className='increment-button' onClick={handleClick} onDoubleClick={handleDoubleClick}>
            Increment
        </button>
        <p ref={countRef} className='count-text'>
            Count is {count}
        </p>
        <hr />
    </div>
  )
}

UseRef.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired
}
