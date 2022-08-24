import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Head from './Head'

const Cart = () => {
  const state = useSelector(state=>state)
  console.log(state)
  return (
    <div>
      <Head/>
      {
        state.map(el=><div><h1>{el.name}</h1></div>)
      }
    </div>
  )
}

export default Cart