import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

import "./index.css";

const Navbar = () => (
  <nav className="nav-container">
    <div className="nav-top-container">
      <div>
        <h1 className="website-logo-heading">Book Us Now</h1>
        <button className="location-button">
          <FaLocationDot className="location-icon" />
          Mumbai, India 
        </button>
      </div>

      <div className="categories-input-bar-container">
        <button className="categories-button">
          <RxHamburgerMenu className="burger-icon" />
          Categories
        </button>
        <div className="input-bar-container">
          <input
            type="search"
            className="search-bar"
            placeholder="DJI phantom"
          />
          <IoSearchOutline />
        </div>
      </div>

      <div className="favorite-sign-in-container">
        <button className="favorites-button">
          <IoHeart className="favorite-icon" />
          Favorites
        </button>
        <button className="sign-in-button">Sign In</button>
      </div>
      <div className="mobile-icon-container">
        <IoSearchOutline />
        <IoHeart />
        <MdAccountCircle />
      </div>
    </div>
    <div className="nav-bottom-container">
      <ul className="list-container">
        <li className="list-item">Live Shows</li>
        <li className="list-item">Streams</li>
        <li className="list-item">Movies</li>
        <li className="list-item">Plays</li>
        <li className="list-item">Events</li>
        <li className="list-item">Sports</li>
        <li className="list-item">Activities</li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
