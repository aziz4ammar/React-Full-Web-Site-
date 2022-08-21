import React from 'react'
import abb from './img/abb.png';
const Head = () => {

  return (
    <div>
      <header>
        <nav className='haha'>
          <div>
            <img className='cb' src={abb} alt="" />
          </div>
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
                
          </div>
        </nav>
      </header>
    </div>
    
  )
}

export default Head