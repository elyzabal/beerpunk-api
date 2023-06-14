import React from 'react'
import './header.css'

export const Header = () => {
  return (
    <header class="header">    
        <div className='logo-name'>
          <img src="./beer-bottle.png" alt="beer bottle"/>
          <div className='brand-name'>
            <h1>Brewdog</h1>
            <h4>BeerPunk API</h4>
          </div>
        </div>
    </header>
  );
}

export default Header;
