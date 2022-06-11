import beachVolleyball from '../../assets/beachVolleyball.gif'
import beachify from '../../assets/beachify.gif'
import boat1 from '../../assets/boat1.gif'
import dogWalking from '../../assets/dogWalking.gif'
import casual2 from '../../assets/casual2.gif'
import { IconContext } from "react-icons";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { GiBeachBucket } from "react-icons/gi"
import { MdOutlineKitesurfing } from "react-icons/md"
import { FaUmbrellaBeach } from "react-icons/fa"
import { TbBeach } from "react-icons/tb"
import { GiOffshorePlatform } from "react-icons/gi"
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="top-container">
        <div className="side-container">
          <p className="header-text">Think Fun. Think Beachify.</p>
          <button className="get-started-button">
            Get started
            <IconContext.Provider value={{ size: "17px", color: "black", className: "get-started-icon"}}>
              <GiBeachBucket />
            </IconContext.Provider>
          </button>
        </div>
        <div className="header-image-container">
          <img className="header-image" src={beachVolleyball} alt="Beach Volleyball"/>
        </div>
      </div>

      <div className="mid-container">

        <div className="single-mid-container">
          <div className="side-container-1">
            <p className="header-text">Make plans and Relax</p>
            <button className="get-started-button-mod">
              Dive in
              <IconContext.Provider value={{ size: "17px", color: "black", className: "get-started-icon"}}>
                <MdOutlineKitesurfing />
              </IconContext.Provider>
            </button>
          </div>
          <div className="header-image-container-1">
            <img className="header-image" src={casual2} alt="Casual Beach"/>
          </div>
        </div>

        <div className="single-mid-container">

          <div className="header-image-container-2">
            <img className="header-image" src={dogWalking} alt="Dog Walking"/>
          </div>
          <div className="side-container-1">
            <p className="header-text">Walk your dog</p>
            <button className="get-started-button-mod">
              Let's relax
              <IconContext.Provider value={{ size: "17px", color: "black", className: "get-started-icon"}}>
                <FaUmbrellaBeach />
              </IconContext.Provider>
            </button>
          </div>
        </div>

        <div className="single-mid-container">
          <div className="side-container-1">
            <p className="header-text">Surf like never before</p>
            <button className="get-started-button-mod">
              Surf here
              <IconContext.Provider value={{ size: "17px", color: "black", className: "get-started-icon"}}>
                <TbBeach />
              </IconContext.Provider>
            </button>
          </div>
          <div className="header-image-container-3">
            <img className="header-image" src={beachify} alt="Surfing"/>
          </div>
        </div>

        <div className="single-mid-container">
          <div className="header-image-container-4">
            <img className="header-image" src={boat1} alt="Casual Beach"/>
          </div>
          <div className="side-container-1">
            <p className="header-text">Go for Kayaking</p>
            <button className="get-started-button-mod">
              Row Plsssss
              <IconContext.Provider value={{ size: "17px", color: "black", className: "get-started-icon"}}>
                <GiOffshorePlatform />
              </IconContext.Provider>
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <IconContext.Provider value={{ size: "47px", color: "#f73952", className: "footer-icons"}}>
          <AiFillInstagram />
          <AiFillLinkedin />
          <AiFillTwitterCircle />
          <AiFillFacebook />
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Home