import { BrowserRouter, Route, Routes } from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
