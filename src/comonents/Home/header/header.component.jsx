import React from 'react'
import "./header.styles.scss";

function Header() {
  return (
    <header className="showcase">
       <main className="showcase-box">
         <h2>The language of now</h2>
         <p>
          Learn new tech skills for Computer Learning <br />
          Month from $12.99 — through Oct. 10.
         </p>
        <form>
          <input type="search" name="search" placeholder="What do you want to learn ?" />
        </form>
       </main>
     </header>
  )
}

export default Header;
