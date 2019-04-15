import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../constants';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLogging: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false
        // data
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLogging: false
        // errorMessage: "error message from action.payload"
      };
    case REGISTER_START:
      return {
        ...state,
        isRegistering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false
        // data
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false
        /// errorMessage: "error message from action.payload"
      };
    default:
      return {
        ...state
      };
  }
};
