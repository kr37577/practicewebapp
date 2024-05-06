import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <div className="logo">
            <h3>ポートフォリオ</h3>
        </div>
         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to = "/SNS">SNS</Link>
            </li>
            {/* <li>
              <Link to = "/Blog">Blog</Link>
            </li> */}
          </ul>
         </nav>
    </header>
  )
}

export default Header