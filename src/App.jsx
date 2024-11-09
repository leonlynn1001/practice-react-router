
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import TeamDetails from './components/TeamDetails'
import Players from './components/Players'
import Teams from './components/Teams'
import Player from './components/Player'
import Team from './components/Team'
import Articles from './components/Articles'
import Article from './components/Article'
import { Suspense } from 'react'
import Spinner from './components/Spinner'

function App() {
  return (
   <main>
    <Navbar/>
    <Suspense fallback={<Spinner/>}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/players" element={<Players/>}>
        <Route path=":playerId" element={<Player/>}/>
      </Route>
      <Route path="/teams" element={<Teams/>}>
        <Route path=':teamId' element={<Team/>}/>
        <Route
        path=''
        element={
          <section className='py-16 text-center grow'>
            Choose a player
          </section>
        }
          />
      </Route>
      <Route path="/:teamId" element={<TeamDetails/>}/>
      <Route path="/:teamId/articles" element={<Articles/>}>
        <Route path=':articleId' element={<Article/>}/>
        <Route
          path=''
          element={
            <section className='py-16 text-center grow'>
              Choose an article
            </section>
          }
        />

      </Route>
    </Routes>
    </Suspense>  
   </main>
  )
}

export default App
