import { push } from 'connected-react-router';

export const INSTALL_PROMPT_SAVE = 'INSTALL_PROMPT_SAVE';
export const INSTALL_PROMPT_DESTROY = 'INSTALL_PROMPT_DESTROY';

export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';

export function pushHistory(path) {
  return dispatch => { dispatch(push(path)) };
}

export function saveInstallPrompt(installPrompt) {
  return { type: INSTALL_PROMPT_SAVE, installPrompt: installPrompt };
}

export function destroyInstallPrompt() {
  return { type: INSTALL_PROMPT_DESTROY };
}

export function fetchUser() {
  return dispatch => {
    return fetch('/api/user', {
      method: 'GET',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(fetchUserSuccess(data)));
  }
}

export function fetchUserSuccess(data) {
  return { type: USER_FETCH_SUCCESS, data: data };
}