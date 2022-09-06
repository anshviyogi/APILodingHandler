import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div><nav class="navbar">
    
    <div class="logo">Project</div>
    
    <ul class="nav-links">
    
      <div class="menu">
        <li><Link to='/showUsers'>Get Users</Link></li>
      </div>
    </ul>
  </nav>
  </div>
  )
}

export default Home