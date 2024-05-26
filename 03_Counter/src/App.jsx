import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter]=useState(15);
  function addValue(){
    if(counter<20){
      setCounter(counter+1);
    }
  }
  function subValue(){
    if(counter!=0){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1>Tanjiro Kamado {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Level Up</button>
      <button onClick={subValue}>Level Down</button>
      <footer>Counter value {counter}</footer>
    </>
  )
}

export default App
