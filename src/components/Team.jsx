import React from 'react'
import { useParams } from 'react-router-dom'
import usePlayer from '../hooks/usePlayer';
import useTeam from '../hooks/useTeam';
import Spinner from './Spinner';

const Team = () => {
  const {teamId}=useParams();
  const {response:team,loadiing} = useTeam(teamId)
  if(loadiing) return (
    <div className="flex flex-grow justify-center py-16">
      <Spinne/>
    </div>
  );
  if(!team) return null;
  console.log(team);
  return (
    <section className='grow'>
    <h2 className='header-md mt-4square'>{team.name}</h2>
    <ul className="mt-6 space-y-2 text-xl text-center">
      <li>
        Est. <span>{team.established}</span>
      </li>
      <li>
        Manager <span>{team.manager}</span>
      </li>
      <li>
        Coach <span>{team.coach}</span>
      </li>
    </ul>
    <div className="mt-6 text-2xl text-center">
          <Link to={`/${teamId}`} className="btn">
            {team.name}'s Team Page        
          </Link>
    </div>
  </section>
  )
}

export default Team