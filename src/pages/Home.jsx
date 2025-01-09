import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  function handleClick() {
    const matn = ['Xush kelibsiz! Bizning bloglarimiz bilan tanishing.',]
    navigate('/blogs', {state: matn})
  }
  return (
    <div>
      <button onClick={handleClick}>Bloglarga o'tish</button>
    </div>
  )
}

export default Home