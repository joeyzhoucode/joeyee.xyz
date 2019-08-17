export const GYMS_FETCH_CALLBACK = 'GYMS_FETCH_CALLBACK';
export const GYM_SELECT = 'GYM_SELECT';
export const PLAN_SELECT = 'PLAN_SELECT';

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

export function gymSelect(selectedGym) {
  return { type: GYM_SELECT, selectedGym: selectedGym };
}

export function planSelect(program, selectedPlan) {
  return { type: PLAN_SELECT, program: program, selectedPlan: selectedPlan };
}