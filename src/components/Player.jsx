import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import usePlayer from '../hooks/usePlayer';
import Spinner from './Spinner';

const Player = () => {
    // const location = useLocation();
    // console.log(location);
    const {playerId} = useParams();
    const {response:player,loading}=usePlayer(playerId)
    console.log(player);
    if(loading) return <Spinner/>
    if(!player) return null;
  return (
    <section className='grow'>
      <img className='w-26 mx-auto mt-6' src={player.avatar} alt={`${player.name}'s avatar`}/>
      <h2 className='header-md mt-4 aspect-square'>{player.name}</h2>
      <ul className="max-w-lg mx-auto mt-6 space-y-2 text-xl">
        <li>
          Team <Link to={`/${player.teamId}`}>{player.teamId}</Link>
        </li>
        <li>
          Position <span>{player.position}</span>
        </li>
        <li>
          PPG <span>{player.ppg}</span>
        </li>
      </ul>
    </section>
  )
}

export default Player