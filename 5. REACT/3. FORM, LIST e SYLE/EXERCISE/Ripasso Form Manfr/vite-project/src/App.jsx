import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from './Components/Form'
import { UnControlledForm } from './Components/UnControlledForm'
function App() {


  return (
    <>
      <Form></Form>
      <UnControlledForm></UnControlledForm>
    </>
  )
}

export default App
