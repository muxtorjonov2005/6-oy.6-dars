import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/styles/home.css'

function Home() {
  const navigate = useNavigate()
  function handleClick() {
    const matn = ['Xush kelibsiz! Bizning bloglarimiz bilan tanishing.',]
    navigate('/blogs', {state: matn})
  }
  return (
    <div className='home_container'>
      <h2>Foydalanuvchilar haqida ma'lumot</h2>
      <button onClick={handleClick} className='homeButton'>Bloglarga o'tish</button>
    </div>
  )
}

export default Home