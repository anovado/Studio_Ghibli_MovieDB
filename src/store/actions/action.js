import axios from "axios";
const api = "https://ghibliapi.herokuapp.com/";
const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// function to get movies data from API
export const getFilms = () => {
  return async (dispatch) => {
    // activate loading
    await dispatch({ type: "ACTIVATE_LOADING" });
    await timeout(1000);

    try {
      const response = await axios.get(api + "films");
      dispatch({
        type: "GET_FILMS",
        payload: response.data,
      });
      dispatch({ type: "STOP_LOADING" });
    } catch (err) {
      console.log(err);
    }
  };
};

// function to get characters data from API
export const getCharacters = () => {
  return async (dispatch) => {
    // activate loading
    await dispatch({ type: "ACTIVATE_LOADING" });
    await timeout(1000);

    try {
      const response = await axios.get(api + "people");
      dispatch({
        type: "GET_PEOPLE",
        payload: response.data,
      });
      dispatch({ type: "STOP_LOADING" });
    } catch (err) {
      console.log(err);
    }
  };
};
