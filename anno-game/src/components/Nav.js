import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <ul>
          <Link to="/" className="link">Home</Link>
        </ul>
        <ul>
          <Link to="/About" className="link">About</Link>
        </ul>
        <ul>
          <Link to="/Game" className="link">Game</Link>
        </ul>
      </nav>
    </>
  );
}