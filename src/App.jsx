import { useEffect, useState } from 'react'
import './App.css'
import { UseReducer } from './components/UseReducer';
import { UseRef } from './components/UseRef';
import { UseMemo } from './components/UseMemo';

function App() {
  const [count, setCount] = useState(0)

  //useEffect se ejecuta despues de cada renderizado
  useEffect(()=>{
    //Actualiza el Titulo del documento con el count(pestaña de la pagina)
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <>
      <h1>React Hooks Practices</h1>
      <div className="card">
        <hr />
        <h2>Excercise Hook useState</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <hr />
      </div>
      <UseReducer />
      <UseRef  />
      <UseMemo count={count} setCount={setCount} />
    </>
  )
}

export default App
