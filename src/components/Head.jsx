import React, { useState } from 'react'
import { BrowserRouter,Link } from 'react-router-dom';
import abb from './img/abb.png';
import abc from './img/abc.png';
import { useDispatch,useSelector } from 'react-redux'

const Head = () => {
  const state = useSelector(state=>state)
  
  return (
    <div>
      <header>
        <nav className='haha'>
          <Link to="/">
          <div>
            <img className='cb' src={abb} alt="" />
          </div>
          </Link>
          <div>
            <input className='rbg' type="text" placeholder='Search'/>
          </div>
          <div>
            <ul>
            <li id="li3" class="navbarlist">Services
                <img src="" alt="" />
                <h3 className='aqw'>{state.length}</h3>
            </li>
            </ul>
            <Link to="/cart">
                <img className='abca' src={abc} alt="cart" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
    
  )
}

export default Head