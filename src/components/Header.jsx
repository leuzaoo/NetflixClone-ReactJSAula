import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
        </a>
      </div>
      <div className="header--user">
        <a href="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
