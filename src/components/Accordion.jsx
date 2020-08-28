import React, { useState, useRef, Fragment } from "react";

export default function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  // function to toggle the accordion panel
  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "bgSpace" : "");
    setHeightState(setActive === "bgSpace" ? "0px" : "100%");
  };

  let linkDirector, linkProducer;
  if (props.film) {
    linkDirector =
      "https://en.wikipedia.org/wiki/" + props.director.split(" ").join("_");
    linkProducer =
      "https://en.wikipedia.org/wiki/" + props.producer.split(" ").join("_");
  }

  return (
    <div className={`panel ${setActive} `} onClick={toggleAccordion}>
      {/* the upper part of the panel that will be showed when it is collapsed */}
      <button className={`panelBtn`}>
        <div className={` movieTitle ${setActive ? "textWhite" : null} `}>
          {props.film
            ? props.title + " (" + props.release_date + ")"
            : props.name + " (" + props.gender + ")"}
        </div>

        {/* open and close chevron icon on the right side of the panel */}
        {!setActive ? (
          <svg
            className="chevron"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        ) : (
          <svg
            className="chevron textWhite"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 15l7-7 7 7"></path>
          </svg>
        )}
      </button>

      {/* the content of the panel */}
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="content"
      >
        {/* content text */}
        <div className="contentText">
          {props.film ? (
            <Fragment>
              <div dangerouslySetInnerHTML={{ __html: props.description }} />
              <div className="rtscore">
                Rotten Tomato Score: {props.rt_score} %
              </div>
              <div className="rtscore">
                Director:{" "}
                <a
                  href={`${linkDirector}`}
                  target="blank"
                  className="wikipediaLink"
                >
                  {props.director}{" "}
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="external-link chevron"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
              <div className="rtscore">
                Producer:{" "}
                <a
                  href={`${linkProducer}`}
                  target="blank"
                  className="wikipediaLink"
                >
                  {props.producer}{" "}
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="external-link chevron"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="rtscore">Age: {props.age}</div>
              <div className="rtscore">Eye Color: {props.eye_color} </div>
              <div className="rtscore">Hair Color: {props.hair_color} </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
