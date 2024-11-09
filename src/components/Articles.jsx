import React from 'react'
import Sidebar from './Sidebar'
import { Outlet, useParams } from 'react-router-dom'
import useTeamArticle from '../hooks/useTeamArticle'
import Spinner from './Spinner'

const Articles = () => {
  const {teamId}=useParams()
  const {response:articles,loading} =useTeamArticle(teamId);
  if(loading) return <Spinner/>
  return (
   <section className="py-16">
    <div className="container flex gap-6 mx-auto">
      <Sidebar title="Articles" list={articles.map((article)=>article.title)}/>
      <Outlet/>
    </div>
   </section>
  )
}

export default Articles