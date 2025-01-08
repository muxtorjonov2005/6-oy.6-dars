import React from 'react'
import './App.css'
import FormCreate from './components/FormCreate'
import FormDelete from './components/FormDelete'
import FormGet from './components/FormGet'

function App() {
  return (
    <div className='container'>
      <FormCreate/>
      <FormDelete/>
      <FormGet/>
    </div>
  )
}

export default App