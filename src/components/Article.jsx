import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useArticle from '../hooks/useArticle';
import Spinner from './Spinner';

const Article = () => {
  const {teamId,articleId} =  useParams();
  const navigate = useNavigate();
  console.log(teamId,articleId);
  const {response:article,loading} = useArticle({teamId,articleId}) 
  if(loading) return <Spinner/>
 // if(article===null) return <Navigage to={`/${teamId}/articles`}/>;
  if(article===null){
    navigate(`/${teamId}/articles`)
  }
  return (
    <section className="grow">
        <article>
            <h1 className="mt-5 header-md">{article.title}</h1>
            <p>{article.body}</p>
        </article>
    </section>
  )
}

export default Article