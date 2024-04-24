import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lang from './Components/Storage.jsx'


function App() {
  const [webLang, setWebLang] = useState("")
  return (
    <>
      <Lang.Provider>
      
      </Lang.Provider>
    </>
  )
}

export default App
