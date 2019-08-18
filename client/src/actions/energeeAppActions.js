export const GYMS_FETCH_CALLBACK = 'GYMS_FETCH_CALLBACK';
export const GYM_SELECT = 'GYM_SELECT';
export const PROGRAM_SELECT = 'PROGRAM_SELECT';

export function gymsFetch(lat, lon) {
  return dispatch => {
    return fetch('/api/energee/gyms?lat=' + lat + '&lon=' + lon, {
      method: 'GET',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(gymsFetchCallback(data)));
  }
}

export function gymsFetchCallback(data) {
  return { type: GYMS_FETCH_CALLBACK, data: data };
}

export function gymSelect(selected) {
  return { type: GYM_SELECT, selected: selected };
}

export function programSelect(selected) {
  return { type: PROGRAM_SELECT, selected: selected };
}