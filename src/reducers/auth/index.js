/* eslint-disable module-resolver/use-alias */
import * as Types from '../../constants/actionsTypes';

const INITIAL_STATE = {isLoggedIn: false, isLoading: false, loginData: {}};

function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case Types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: true,
        loginData: action.payload,
      });
    case Types.LOGIN_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: false,
      });
    default:
      return state;
  }
}
export default authReducer;
