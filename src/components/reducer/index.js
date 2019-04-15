export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function authenticationReducer(state, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLogging: true
      };
    default:
      return {
        ...state
      };
  }
}
