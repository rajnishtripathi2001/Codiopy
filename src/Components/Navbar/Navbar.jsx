import {React,useState} from "react";
import "./Navbar.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false); // Use state to manage menu state

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const sidemenuStyle = {
        right: menuOpen ? '0px' : '-350px'
    };

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
      //console.log(window.scrollY);
      if (window.scrollY >= 70) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
  
    window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "nav-container active" : "nav-container"}>
      <div className="nav-logo">
        <img src="cpy.png" alt="" />
      </div>
      <div className="nav-links">
        <ul id={menuOpen ? "sidemenu" : "sidemenu-closed"} style={sidemenuStyle}>
        <i class="fa-solid fa-xmark fast" onClick={closeMenu}></i>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i class="fa-solid fa-bars fast" onClick={openMenu}></i>

      </div>
    </div>
  );
}
