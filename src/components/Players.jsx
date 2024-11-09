import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom'
import usePlayerNames from '../hooks/usePlayerNames';
import Sidebar from './Sidebar';
import Spinner from './Spinner';

const Players = () => {
const {search} =  useLocation()
const [searchParams] = useSearchParams(search);
const [team,setTeam] = useState(searchParams.get('teamId'))
// console.log(team);
const  {response:names,loading }= usePlayerNames(team);
//console.log(names);

useEffect(()=>{
  if(search===''){
    searchParams.delete('teamId')
    setTeam(null)
  }else{
    setTeam(searchParams.get('teamId'))
  }
},[search])
if(loading) return <Spinner/>;
return (
    <section className='py-16'>
       <div className="container mx-auto">
        <Sidebar title="Players" list={names}/>
        <Outlet/>
       </div>
    </section>
  )
}
export default Players