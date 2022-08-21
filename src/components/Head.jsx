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
                <ul class="list2">
                  <a href="/quran/Quran.html">
                  <li class="second-list">Quran</li>
                  </a>
                  <a href="/biography of the prophet/botp.html">
                  <li class="second-list">Biography of the Prophet</li>
                  </a>
                  <a href="/ablution/ablution.html">
                  <li class="second-list">Ablution</li>
                  </a>
                  <a href="/prayer/prayer.html">
                  <li class="second-list">Prayer</li>
                  </a>
                  <a href="/al haj/al_haj.html">
                  <li class="second-list">Al Haj</li>
                  </a>
                </ul>  
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