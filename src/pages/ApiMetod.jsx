import React from 'react'
import '../assets/styles/apiMetod.css'
import FormCreate from "../components/FormCreate";
import FormDelete from "../components/FormDelete";
import FormGet from "../components/FormGet";
function ApiMetod() {
  return (
    <div className='container1'>
        <FormCreate/>
        <FormDelete/>
        <FormGet/>
    </div>
  )
}

export default ApiMetod