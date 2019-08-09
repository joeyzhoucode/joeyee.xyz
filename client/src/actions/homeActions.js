import { push } from 'connected-react-router';

export const UPDATE_MESSAGE_INPUT = 'UPDATE_MESSAGE_INPUT';
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

export function updateMessageInput(messageInput) {
  return { type: UPDATE_MESSAGE_INPUT, messageInput: messageInput };
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