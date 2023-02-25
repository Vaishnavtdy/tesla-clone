import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HomeSwiper from './components/Swiper/HomeSwiper'
import TopBar from './components/TopBar/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <div style={{ position: 'relative' }}>
        <Header />
        <HomeSwiper />
      </div>
    </>
  )
}

export default App
