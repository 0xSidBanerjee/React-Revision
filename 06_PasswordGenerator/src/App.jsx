import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength]=useState(8);
  const [number, setNumber]=useState(false);
  const [splChar, setSplChar]=useState(false);
  const [password, setPassword]=useState("");

  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
  const generateRandomPassword = useCallback(()=>{
    let generatedPassword='';
    let chars=letters;
    if (number) chars+=numbers;
    if (splChar) chars+=specialChars;
    
    for(let i=0; i<length; i++){
      let randomIndex=parseInt(Math.random()*chars.length)
      generatedPassword+=chars[randomIndex];
    }
    setPassword(generatedPassword);
  }, [length, number, splChar, letters, numbers, specialChars, setPassword])
  
  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
  }, [password])
  
  const passwordRef=useRef(null);
  
  useEffect(()=>{
    generateRandomPassword();
  }, [generateRandomPassword]);
  
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <input ref={passwordRef} type="text" value={password} readOnly />
      <div>
        <label className='text-white'>
          Length({length}):
          <input
            type="range"
            min="8"
            max="24"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <div>
        <label className='text-white'>
          Include Numbers:
          <input
            type="checkbox"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label className='text-white'>
          Include Special Characters:
          <input
            type="checkbox"
            checked={splChar}
            onChange={(e) => {
              setSplChar(e.target.checked);
              console.log(e.target.checked);
            } 
          }
          />
        </label>
      </div>
      <button onClick={copyPasswordToClipboard} className='text-white'>Copy Password</button>
    </>
  )
}

export default App
