import { push } from 'connected-react-router';

export const SAVE_INSTALL_PROMPT = 'SAVE_INSTALL_PROMPT';
export const DESTROY_INSTALL_PROMPT = 'DESTROY_INSTALL_PROMPT';
export const MESSENGER_FETCH_SUCCESS = 'MESSENGER_FETCH_SUCCESS';
export const MESSENGER_SUBSCRIBE = 'MESSENGER_SUBSCRIBE';
export const MESSENGER_UNSUBSCRIBE = 'MESSENGER_UNSUBSCRIBE';
export const MESSENGER_RECIEVE = 'MESSENGER_RECIEVE';
export const MESSENGER_BROADCAST = 'MESSENGER_BROADCAST';

export function historyPush(path) {
  return dispatch => {
    dispatch(push(path));
  }
}

export function saveInstallPrompt(installPrompt) {
  return { type: SAVE_INSTALL_PROMPT, installPrompt: installPrompt };
}

export function destroyInstallPrompt() {
  return { type: DESTROY_INSTALL_PROMPT };
}

export function messengerFetch(groupName) {
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
    .then(data => dispatch(messengerFetchSuccess(data)));
  }
}

export function messengerFetchSuccess(data) {
  return { type: MESSENGER_FETCH_SUCCESS, data: data };
}

export function messengerSubscribe(userId, groupName, callback) {
  return { type: MESSENGER_SUBSCRIBE, userId: userId, groupName: groupName, callback: callback };
}

export function messengerUnsubscribe() {
  return { type: MESSENGER_UNSUBSCRIBE };
}

export function messengerRecieve(data) {
  return { type: MESSENGER_RECIEVE, data: data };
}

export function messengerBroadcast(data) {
  return { type: MESSENGER_BROADCAST, data: data };
}