import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import Accordion from "../components/Accordion";

import { getFilms } from "../store/actions/action";

function Movies(props) {
  const { getFilms } = props;

  // useEffect to trigger function to get data from external API
  useEffect(() => {
    getFilms();
  }, [getFilms]);

  return (
    <div className="mainbg">
      <NavBar />
      <div className="titleSection">
        <div className="title">List of all movies</div>
      </div>
      <div className="accordionCont">
        {props.isLoading ? (
          <img
            src={require("../assets/images/loading.svg")}
            alt="loading"
            className="loading"
          />
        ) : (
          props.films.map((el, i) => (
            <Fragment key={i}>
              <Accordion
                film={true}
                title={el.title}
                description={el.description}
                rt_score={el.rt_score}
                release_date={el.release_date}
                director={el.director}
                producer={el.producer}
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
    films: state.films,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  getFilms,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
