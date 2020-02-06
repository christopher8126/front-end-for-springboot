import { GET_FAMOUSPERSONS } from "./types";
import { ADD_FAMOUSPERSON } from "./types";
import { SELECT_SINGLE_FAMOUSPERSON } from "./types";
import { DELETE_FAMOUSPERSON } from "./types";
import { EMPTY_SELECTED_FAMOUS_PERSON } from "./types";
import { UPDATE_FAMOUS_PERSON } from "./types";
import axios from "axios";
export const getFamousPersons = () => dispatch => {
  axios
    .get("http://localhost:8080/api/famous-person")
    .then(response => {
      const { data } = response;
      dispatch({
        type: GET_FAMOUSPERSONS,
        payload: data
      });
    })
    .catch(err => console.log(err));
};

export const addFamousPerson = fPerson => dispatch => {
  const header = { "Content-Type": "Application/json" };
  axios
    .post("http://localhost:8080/api/famous-person", fPerson, header)
    .then(response => {
      dispatch({
        type: ADD_FAMOUSPERSON,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export const selectSingleFamousPerson = id => dispatch => {
  // SELECT_SINGLE_FAMOUSPERSON
  axios
    .get(`http://localhost:8080/api/famous-person/${id}`)
    .then(response => {
      // console.log(response.data);
      dispatch({
        type: SELECT_SINGLE_FAMOUSPERSON,
        payload: response.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteFamousPerson = id => dispatch => {
  axios
    .delete(`http://localhost:8080/api/famous-person/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_FAMOUSPERSON,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const emptySelected = () => {
  return {
    type: EMPTY_SELECTED_FAMOUS_PERSON
  };
};

export const updateFamousPerson = famousPerson => dispatch => {
  const header = { "Content-Type": "Application/json" };
  axios
    .put("http://localhost:8080/api/famous-person", famousPerson, header)
    .then(response => {
      dispatch({
        type: DELETE_FAMOUSPERSON,
        payload: response.data.id
      });
      dispatch({
        type: UPDATE_FAMOUS_PERSON,
        payload: response.data
      });
      dispatch({
        type: EMPTY_SELECTED_FAMOUS_PERSON
      });
    })
    .catch(err => console.log(err));
};
