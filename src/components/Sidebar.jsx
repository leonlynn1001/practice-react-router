import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import slugify from '../utils/slugify'

const Sidebar = ({title,list}) => {
  return (
    <aside className='min-w-[260px]'>
        <h3 className="header">{title}</h3>
        <ul className="max-wl-3xl gap-4 mx-auto mt-4 space-y-2">
            {
                list.map((item)=>(
                    <CustomLink key={item} to={`${slugify(item)}`}>
                        {item.toUpperCase()}
                    </CustomLink>
                ))
            }
        </ul>
    </aside>
  )
}

export default Sidebar
function CustomLink({children,to}){
    const location=useLocation();
    //const playerId = location.pathname.split('/')[2];
    //const matched = playerId === to;
    const splittedArr = location.pathname.split('/');
    const matched = splittedArr[splittedArr.length-1] === to;
    
    return(
        <li>
            <Link className={matched?'font-bold':''}
            to={{
                pathname:to,
                search:location.search,
            }}>
                {children} {matched?'✨' : null }
            </Link>
        </li>
    )
}