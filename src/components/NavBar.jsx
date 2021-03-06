import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <Link to="" className="navHome">
        Studio Ghibli MDB
      </Link>
      <div className="menu">
        <Link to="/movies" className="navItem mr4">
          Movies
        </Link>
        <Link to="/characters" className="navItem">
          Characters
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
