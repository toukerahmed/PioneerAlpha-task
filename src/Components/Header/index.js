import { useState } from "react";
import Slider from "../Slider";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpen = (event) => {
    setOpen(!open);
  };
  return (
    <header className="header-container">
      <div className="bg-img" />
      <div className={`icon-bar ${open ? "cross-bar" : ""}`} onClick={onOpen} />
      <div className={`menu ${open ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">{"Service & Package"}</a>
        <a href="#">Gallery</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
      </div>

      <Slider />
    </header>
  );
};

export default Header;
