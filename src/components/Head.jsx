import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom';
import abb from './img/abb.png';
const Head = () => {

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
            <input className='rbg' type="text" />
            <button>Search</button>
          </div>
          <div>
            <ul>
            <li id="li3" class="navbarlist">Services
                <img src="" alt="" />
                <h3 className='aqw'>0</h3>
            </li>
            </ul>
            <Link to="/cart">
                <button>cart</button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
    
  )
}

export default Head