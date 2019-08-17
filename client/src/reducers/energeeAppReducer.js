import { initialState } from './rootReducer';
import { GYMS_FETCH_CALLBACK, GYM_SELECT, PLAN_SELECT } from '../actions/energeeAppActions';

export default function energeeApp(state = initialState.energeeApp, action) {
  let newState;
  switch(action.type) {
    case GYMS_FETCH_CALLBACK:
      newState = {
        ...state,
        gyms: {
          ...state.gyms,
          locations: action.data
        }
      }
      return newState;
    case GYM_SELECT:
      newState = {
        ...state,
      }
      newState.gyms.selectedGym = action.selectedGym;
      return newState;
    case PLAN_SELECT:
      newState = {
        ...state,
      }
      newState.programs[action.program].selectedPlan = action.selectedPlan;
      return newState;
    default:
      return state;
  }
}