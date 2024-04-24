/* 
-Creare un InteractiveWelcome componente che rende un input tag e il Welcome componente.
-Passa il contenuto corrente del input tag al name prop del Welcome componente. 
 Il input tag dovrebbe essere un componente controllato. */




import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InteractiveWelcome } from './Components/InteractiveWelcome'
function App() {


  return (
    <>
      <InteractiveWelcome/>
    </>
  )
}

export default App
