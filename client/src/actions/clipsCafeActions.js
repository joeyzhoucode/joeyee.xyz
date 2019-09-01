export const PLAYER_MOUNT = 'PLAYER_MOUNT';
export const PLAYER_SUBSCRIBE = 'PLAYER_SUBSCRIBE';
export const PLAYER_UNSUBSCRIBE = 'PLAYER_UNSUBSCRIBE';
export const PLAYER_COMMAND_FETCH = 'PLAYER_COMMAND_FETCH';
export const PLAYER_COMMAND_FETCH_SUCCESS = 'PLAYER_COMMAND_FETCH_SUCCESS';
export const PLAYER_COMMAND_RECIEVE = 'PLAYER_COMMAND_RECIEVE';
export const PLAYER_COMMAND_BROADCAST = 'PLAYER_COMMAND_BROADCAST';

const PLAYER_TYPE = 'PLAYER_TYPE';

export function mountPlayer(player) {
  return { type: PLAYER_MOUNT, player: player };
}

export function subscribePlayer(callback) {
  return {
    type: PLAYER_SUBSCRIBE,
    connectionType: PLAYER_TYPE,
    callback: callback
  };
}

export function unsubscribePlayer() {
  return { type: PLAYER_UNSUBSCRIBE };
}

export function fetchPlayerCommand(groupName) {
  return dispatch => {
    return fetch('/api/clipsCafe/' + groupName, {
      method: 'GET',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(fetchPlayerCommandSuccess(data.pop())));
  }
}

export function fetchPlayerCommandSuccess(data) {
  return { type: PLAYER_COMMAND_FETCH_SUCCESS, data: data };
}

export function recievePlayerCommand(data) {
  return { type: PLAYER_COMMAND_RECIEVE, data: data };
}

export function broadcastPlayerCommand(data) {
  return { type: PLAYER_COMMAND_BROADCAST, data: data };
}