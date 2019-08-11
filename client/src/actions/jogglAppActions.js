export const POI_FETCH_CALLBACK = 'POI_FETCH_CALLBACK';

export function poiFetch(lat, lon) {
  return dispatch => {
    return fetch('/api/joggl/poi?lat=' + lat + '&lon=' + lon, {
      method: 'GET',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(poiFetchCallback(data)));
  }
}

export function poiFetchCallback(data) {
  return { type: POI_FETCH_CALLBACK, data: data };
}