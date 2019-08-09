export const USER_FETCH_CALLBACK = 'USER_FETCH_CALLBACK';

export function userFetch() {
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
    .then(data => dispatch(userFetchCallback(data)));
  }
}

export function userFetchCallback(data) {
  return { type: USER_FETCH_CALLBACK, data: data };
}