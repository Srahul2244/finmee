import React, { useRef, useState } from "react";
import "../style/navbar.css";
import home from "../assets/home-1.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
//Dropdown Menu for Industries options
import DropdownMenu from "../util/dropdownmenu";
//Images and Icons
import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Hero from "./Hero";
import Footer from "./footer";

function Navbar({ handleClick }) {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
    handleClick();
  };
  const myNav = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", myNav);

  return (
    <>
      <nav className={color ? "navbar white" : "navbar"}>
        {/* LOGO */}
        <div style={{ textDecoration: "none" }}>
          <img
            src={color ? logoDark : color ? logoDark : logo}
            alt="logo"
            style={{ height: "50px" }}
          />
        </div>

        {/* navigation*/}
        <div className="nav-links">
          <div className={color ? "text" : "link"}>Home</div>
          <div
            className={color ? "text" : "link"}
            onMouseEnter={() => setIsDropDownVisible(true)}
            onMouseLeave={() => setIsDropDownVisible(false)}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              Industries
              <ArrowDropDownIcon />
            </div>
            {/* <DropdownMenu /> */}
            {isDropDownVisible && <DropdownMenu />}
          </div>
          <a
            href="https://ntwist.com/ai-software/"
            className={color ? "text" : "link"}
          >
            AI Software
          </a>
          <a
            href="https://ntwist.com/blog/"
            className={color ? " text" : "link"}
          >
            Blog
          </a>
          <a
            href="https://ntwist.com/contact-us/"
            className={color ? "text" : "link"}
          >
            Contact Us
          </a>
        </div>

        <div className="smaller-screens">
          {clicked ? (
            <CloseIcon onClick={() => handleButtonClick()} />
          ) : (
            <MenuIcon onClick={() => handleButtonClick()} />
          )}
        </div>
      </nav>

      <div className="div">
        <div className="md:w-[36%] p-[20px] ">
          <h1 className="md:text-3xl md:font-bold mt-52 leading-10 text-[#FFFFFF] font-bold text-3xl md:w-[100%] ">
            Data-powered solutions for Industrial Excellence
          </h1>
          <button className="flex items-center justify-center p-[10px] bg-[#0092FF] text-[white] font-bold rounded-[4px] mt-[20px] w-[200px]">
            Read more
          </button>
        </div>
        <div className="img-div">
          <img
            className="img-src"
            style={{ width: "100%", height: "470px", marginTop: "40px" }}
            src={home}
            alt="midd"
          />
        </div>
      </div>
      <Hero />
      <Footer />
    </>
  );
}

export default Navbar;
