/* eslint-disable module-resolver/use-alias */
import * as Types from '../../constants/actionsTypes';
import RestClient from '../../helpers/RestClient';

export function getUsers() {
  return dispatch => {
    dispatch({type: Types.GET_USERS_REQUEST});
    RestClient.getCall('/users?page=2')
      .then(json => {
        console.log(json);
        dispatch({type: Types.GET_USERS_SUCCESS});
      })
      .catch(err => {
        console.log(err);
        dispatch({type: Types.GET_USERS_FAIL});
      });
  };
}

export function postUsers(requestData) {
  return dispatch => {
    dispatch({type: Types.GET_USERS_REQUEST});
    RestClient.postCall('/register', requestData)
      .then(json => {
        console.log(json);
        dispatch({type: Types.GET_USERS_SUCCESS});
      })
      .catch(err => {
        console.log(err);
        dispatch({type: Types.GET_USERS_FAIL});
      });
  };
}

export function deletUser(userID) {
  return dispatch => {
    dispatch({type: Types.GET_USERS_REQUEST});
    RestClient.delCall(`/users/${userID}`)
      .then(json => {
        console.log(json);
        dispatch({type: Types.GET_USERS_SUCCESS});
      })
      .catch(err => {
        console.log(err);
        dispatch({type: Types.GET_USERS_FAIL});
      });
  };
}

export function putUsers(requestData) {
  return dispatch => {
    dispatch({type: Types.GET_USERS_REQUEST});
    RestClient.putCall(`/user/${requestData.id}`, requestData)
      .then(json => {
        console.log(json);
        dispatch({type: Types.GET_USERS_SUCCESS});
      })
      .catch(err => {
        console.log(err);
        dispatch({type: Types.GET_USERS_FAIL});
      });
  };
}

export function patchUsers(requestData) {
  return dispatch => {
    dispatch({type: Types.GET_USERS_REQUEST});
    RestClient.patchCall(`/user/${requestData.id}`, requestData)
      .then(json => {
        console.log(json);
        dispatch({type: Types.GET_USERS_SUCCESS});
      })
      .catch(err => {
        console.log(err);
        dispatch({type: Types.GET_USERS_FAIL});
      });
  };
}
