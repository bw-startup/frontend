import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  PREDICT_START,
  PREDICT_SUCCESS,
  PREDICT_FAILURE
} from '../constants';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLogging: true,
        errorMessage: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        errorMessage: ''
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
        isRegistering: true,
        errorMessage: ''
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        errorMessage: ''
        // data
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false
        /// errorMessage: "error message from action.payload"
      };
    case PREDICT_START:
      return {
        ...state,
        isPredicting: true,
        errorMessage: ''
      };
    case PREDICT_SUCCESS:
      return {
        ...state,
        isPredicting: false,
        errorMessage: ''
      };
    case PREDICT_FAILURE:
      return {
        ...state,
        isPredicting: false
        // errorMessage: "error message from action.payload"
      };
    default:
      return {
        ...state
      };
  }
};
