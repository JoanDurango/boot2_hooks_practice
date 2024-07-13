import { useReducer } from 'react';

export const UseReducer = () => {

    const initialState = {count: 0}

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return{ ...state, count: state.count + 1};
            case 'decrease':
                return{ ...state, count: state.count - 1};
            case 'reset':
                return {...initialState};
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Excercise Hook UseReducer</h2>
      <button className='increment-button' onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button className='decrease-button' onClick={() => dispatch({ type: 'decrease' })}>
          Decrease
        </button>
        <button className='reset-button' onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
        <p className='count-text'>Count is {state.count}</p>
      <hr />
    </div>
  )
}