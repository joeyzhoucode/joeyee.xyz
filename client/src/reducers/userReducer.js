import { initialState } from './rootReducer';
import { USER_FETCH_CALLBACK } from '../actions/userActions';

export default function user(state = initialState.user, action) {
  let newState;
  switch(action.type) {
    case USER_FETCH_CALLBACK:
      newState = {
        ...state,
        id: action.data.id,
        firstName: action.data.first_name,
        lastName: action.data.last_name,
        email: action.data.email,
        image: action.data.image,
      }
      return newState;
    default:
      return state;
  }
}