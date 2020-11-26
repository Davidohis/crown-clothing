import React from 'react'
import "./header.styles.scss";

function Header() {
  return (
    <header className="showcase">
       <main className="showcase-box">
         <h2>Classic Clothing</h2>
         <p>
          Crwn clothing is an online fashion store with 
          a sassy and irreverent style and attitude.
         </p>
        <form>
          <input type="search" name="search" placeholder="Search for items....." />
        </form>
       </main>
     </header>
  )
}

export default Header;
