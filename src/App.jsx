
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import TeamDetails from './components/TeamDetails'
import Players from './components/Players'
import Teams from './components/Teams'
import Player from './components/Player'
import Team from './components/Team'

function App() {
  return (
   <main>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/players" element={<Players/>}>
        <Route path=":playerId" element={<Player/>}/>
      </Route>
      <Route path="/teams" element={<Teams/>}>
        <Route path=":teamId" element={<Team/>}/>
      </Route>
      <Route path="/:teamId" element={<TeamDetails/>}/>
    </Routes>
   </main>
  )
}

export default App
