import React from 'react'
import Main from './Main'
const List = ({info}) => {
  return (
    <div id='deal'>
        {
        info.map((el,i)=><Main el={el} key={i}/>)
        }
    </div>
  )
}

export default List