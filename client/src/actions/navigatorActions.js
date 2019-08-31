import { push } from 'connected-react-router';

export const INSTALL_PROMPT_SAVE = 'INSTALL_PROMPT_SAVE';
export const INSTALL_PROMPT_DESTROY = 'INSTALL_PROMPT_DESTROY';

export const MESSAGES_FETCH_SUCCESS = 'MESSAGES_FETCH_SUCCESS';

export const CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
export const CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
export const CHANNEL_RECIEVE = 'CHANNEL_RECIEVE';
export const CHANNEL_BROADCAST = 'CHANNEL_BROADCAST';

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

export function fetchMessages(groupName) {
  return dispatch => {
    return fetch('/api/messages/' + groupName, {
      method: 'GET',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(fetchMessagesSuccess(data)));
  }
}

export function fetchMessagesSuccess(data) {
  return { type: MESSAGES_FETCH_SUCCESS, data: data };
}

export function subscribeChannel(userId, groupName, callback) {
  return { type: CHANNEL_SUBSCRIBE, userId: userId, groupName: groupName, callback: callback };
}

export function unsubscribeChannel() {
  return { type: CHANNEL_UNSUBSCRIBE };
}

export function recieveChannel(data) {
  return { type: CHANNEL_RECIEVE, data: data };
}

export function broadcastChannel(data) {
  return { type: CHANNEL_BROADCAST, data: data };
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