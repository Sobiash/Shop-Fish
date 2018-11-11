import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="top">
      <h1>
        Deal
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>Fresh Daily</span>
      </h3>
    </header>
  );
};

export default Header;
