import axios from "axios";
export const LOGIN = "LOGIN";

const apiUrl =
  "https://anp.indofoodinternational.com:2864/bdrtny/iorudhtnhgi";


export const getLogin = (username, password) => (dispatch) => {
  axios
    .post(apiUrl, {
        user_id: username,
        pswd: password
    })
    .then((response) => {
      dispatch({ type: "LOGIN", payload: response.data });
      console.log(response);
    })
    .catch((error) => {
      dispatch({ type: "LOGIN", payload: error });
    });
};

