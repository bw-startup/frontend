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
        isLoggingIn: true,
        errorMessage: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        errorMessage: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        errorMessage: action.payload
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
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        errorMessage: action.payload
      };
    case PREDICT_START:
      return {
        ...state,
        isPredicting: true,
        errorMessage: ''
      };
    case PREDICT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isPredicting: false,
        errorMessage: '',
        prediction: action.payload
      };
    case PREDICT_FAILURE:
      return {
        ...state,
        isPredicting: false,
        errorMessage: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
