import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Myform } from './Components/Myform'
import { Myform2 } from './Components/Myform2'
import { ControlledMessageForm } from './Components/ControlledMessageForm'
import { UnControlledForm } from './Components/UnControlledForm'
function App() {

  return (
    <>
      <Myform></Myform>
      <Myform2></Myform2>
      <ControlledMessageForm></ControlledMessageForm>
      <UnControlledForm></UnControlledForm>
    </>
  )
}

export default App

/*  -----------------------------------------------------------------------------------------------
                                FORM CONTROLLATO
--------------------------------------------------------------------------------------------------- */
/* 
-Non mantiene uno stato interno del suo contenuto, ma si basa sul componente genitore per 
 fornire il valore corrente
-Mantiene il controllo completo su cio da mostrare
-Si gestiscono Con Lo State, sono più  precisi
-Usato per dati sensibili*/


/*  -----------------------------------------------------------------------------------------------
                                    FORM NON CONTROLLATO
--------------------------------------------------------------------------------------------------- */
/* 
-Si usa per dati non sensibili,  esso è più veloce */