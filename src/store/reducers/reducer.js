const initialState = {
  films: [],
  people: [],
  isLoading: false,
};

export default function reducer(prevState = initialState, action) {
  switch (action.type) {
    case "GET_FILMS":
      return {
        ...prevState,
        films: action.payload,
      };
    case "GET_PEOPLE":
      return {
        ...prevState,
        people: action.payload,
      };
    case "ACTIVATE_LOADING":
      return {
        ...prevState,
        isLoading: true,
      };
    case "STOP_LOADING":
      return {
        ...prevState,
        isLoading: false,
      };

    default:
      return prevState;
  }
}
