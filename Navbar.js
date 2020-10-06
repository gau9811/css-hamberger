import React, { useState } from "react";
import Button from "../Button";
import "./Navbar.css";
const Navbar = () => {
  const [menuItem, setMenuItem] = useState([
    {
      title: "HOME",
      url: "#",
    },
    {
      title: "SERVICE",
      url: "#",
    },
    {
      title: "ABOUT",
      url: "#",
    },
    {
      title: "PROJECT",
      url: "#",
    },
  ]);

  const [click, setClick] = useState(false);

  const handleChange = () => {
    setClick((click) => !click);
  };
  return (
    <>
      <nav className="NavBarItems">
        <h1 className="navbar-logo">NavBar</h1>
        <div className="menu-icon" onClick={handleChange}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {menuItem.map((menu) => {
            return (
              <li key={menu.title}>
                <a className="nav-links" href={menu.url}>
                  {menu.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Signup</Button>
      </nav>
    </>
  );
};

export default Navbar;
