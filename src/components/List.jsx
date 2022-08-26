import React, { useState } from 'react'
import Head from './Head'
import Main from './Main'
const List = ({info}) => {
  const [text,setText] = useState("")
  return (
    <div id='deal'>
        {
        info.map((el,i)=><Main el={el} key={i}/>)
        }
    </div>
  )
}

export default List