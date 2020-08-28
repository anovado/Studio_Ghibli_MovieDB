import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import Accordion from "../components/Accordion";

import { getCharacters } from "../store/actions/action";

function Characters(props) {
  const { getCharacters } = props;

  // useEffect to trigger function to get data from external API
  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <div className="mainbg">
      <NavBar />
      <div className="titleSection">
        <div className="title">List of all characters</div>
      </div>
      <div className="accordionCont">
        {props.isLoading ? (
          <img
            src={require("../assets/images/loading.svg")}
            alt="loading"
            className="loading"
          />
        ) : (
          props.people.map((el, i) => (
            <Fragment key={i}>
              <Accordion
                film={false}
                name={el.name}
                gender={el.gender}
                age={el.age}
                eye_color={el.eye_color}
                hair_color={el.hair_color}
              />
            </Fragment>
          ))
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    people: state.people,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  getCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
