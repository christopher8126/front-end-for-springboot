import {
  GET_FAMOUSPERSONS,
  ADD_FAMOUSPERSON,
  SELECT_SINGLE_FAMOUSPERSON,
  DELETE_FAMOUSPERSON,
  EMPTY_SELECTED_FAMOUS_PERSON,
  UPDATE_FAMOUS_PERSON
} from "../actions/types";
const initialState = {
  famousPersons: [],
  selectedFamousPerson: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FAMOUSPERSONS:
      return {
        ...state,
        famousPersons: action.payload
      };

    case ADD_FAMOUSPERSON:
      return {
        ...state,
        famousPersons: [...state.famousPersons, action.payload]
      };

    case SELECT_SINGLE_FAMOUSPERSON:
      return {
        ...state,
        selectedFamousPerson: action.payload
      };

    case DELETE_FAMOUSPERSON:
      return {
        ...state,
        famousPersons: state.famousPersons.filter(
          fPersons => fPersons.id !== action.payload
        )
      };

    case EMPTY_SELECTED_FAMOUS_PERSON:
      return {
        ...state,
        selectedFamousPerson: null
      };
    case UPDATE_FAMOUS_PERSON:
      return {
        ...state,
        famousPersons: [...state.famousPersons, action.payload]
      };

    default:
      return state;
  }
}
