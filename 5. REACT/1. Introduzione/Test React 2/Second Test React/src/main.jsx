import React from 'react'
import ReactDOM from 'react-dom/client'

//Importiamo App ed aggiungiamolo al Main
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
