import React from 'react'
import Sidebar from './Sidebar'
import useTeamNames from '../hooks/useTeamNames'
import { Outlet, useLocation } from 'react-router-dom';

const Teams = () => {
  const {response:teamNames,loading} = useTeamNames();
  if(loading) return null;
  return (
   <section className="py-16">
    <div className="container flex gap-6 mx-auto">
      <Sidebar title="Teams" list={teamNames}/>
      <Outlet/>
    </div>
   </section>
  )
}

export default Teams