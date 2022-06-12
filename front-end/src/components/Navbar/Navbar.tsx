import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { IconContext } from "react-icons";
import { GiBeachBall } from "react-icons/gi";
import Deso from "deso-protocol";
const deso = new Deso();

const Navbar = () => {
  const [loginResponse, setLoginResponse] = React.useState<any>();
  const [show, setShow] = React.useState<any>(false);

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
          {!show && <button onClick={async () => {
              const user = await deso.identity.login();
              console.log(user);
              setLoginResponse(JSON.stringify(user, null, 2));
              setShow(true)
              console.log(loginResponse)
            }} className="auth-button">
            Log In
          </button>}
          {show && <button onClick={() => {
              deso.identity.logout(deso.identity.getUserKey() || '{}');
              setShow(false)
            }} className="auth-button">
          Log Out
          </button>}
    </nav>
  )
}

export default Navbar