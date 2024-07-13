import { useEffect, useState } from 'react'
import './App.css'

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
    </>
  )
}

export default App
