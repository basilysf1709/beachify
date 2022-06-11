import { Link } from 'react-router-dom'
import "./Navbar.css"
import { IconContext } from "react-icons";
import { GiBeachBall } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="navbar-container">
        <IconContext.Provider value={{ size: "47px", color: "#f73952", className: "icon-logo" }}>
          <GiBeachBall />
        </IconContext.Provider>
          <ul className="navbar-list">
              <li>
                <Link id="links" to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link id="links" to='/restaurants'>
                  Restaurants
                </Link>
              </li>
              <li>
                <Link id="links" to='/find'>
                  Find
                </Link>
              </li>
              <li>
                <Link id="links" to='/plans'>
                  Plans
                </Link>
              </li>
          </ul>
        <button className="auth-button">Log In</button>
    </nav>
  )
}

export default Navbar