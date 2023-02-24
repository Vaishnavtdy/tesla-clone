import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HomeSwiper from './components/Swiper/HomeSwiper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HomeSwiper />
    </>
  )
}

export default App
