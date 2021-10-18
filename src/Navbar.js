import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <img
        className="navbar_logo"
        src="https://camo.githubusercontent.com/0a706ccd6ee491605f9104d54ed79ad6f49d2177309440a7156f0a6b41c30d40/68747470733a2f2f692e696d6775722e636f6d2f346f6c514b6e302e706e67"
        alt="Jetflix Logo"
      ></img>
      <img
        className="navbar_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Jetflix Logo"
      ></img>
    </div>
  );
}

export default Navbar;
