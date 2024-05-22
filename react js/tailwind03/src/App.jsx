import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState();
  const passwordgen=() => {}


  return (
    <h1 className="text-5xl font-bold underline bg-black text-white">
    PASSWORD GENERETOR
  </h1>
  )
}

export default App
