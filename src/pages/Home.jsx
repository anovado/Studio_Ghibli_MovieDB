import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import NavBar from "../components/NavBar";

function Home(props) {
  return (
    <div className="mainbg">
      <NavBar />
      <div className="landing">
        <h1 className="heading">
          Studio Ghibli <br />
          Movie Database
        </h1>
        <h4 className="subheading">
          Find movies and characters from your <br />
          favorite studio here
        </h4>
        <Link to="/movies">
          <button className="explore">Explore</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
