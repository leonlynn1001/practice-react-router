
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import TeamDetails from './components/TeamDetails'
import Players from './components/Players'
import Teams from './components/Teams'

function App() {
  return (
   <main>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/players" element={<Players/>}/>
      <Route path="/teams" element={<Teams/>}/>
      <Route path="/:teamId" element={<TeamDetails/>}/>
    </Routes>
   </main>
  )
}

export default App
