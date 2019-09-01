import { initialState } from './rootReducer';
import { 
  INSTALL_PROMPT_SAVE,
  INSTALL_PROMPT_DESTROY,
  USER_FETCH_SUCCESS
  } from '../actions/navigatorActions';

export default function navigator(state = initialState.navigator, action) {
  let newMessages;
  switch (action.type) {
    case INSTALL_PROMPT_SAVE:
      return { ...state, installPrompt: action.installPrompt };
    case INSTALL_PROMPT_DESTROY:
      return { ...state, installPrompt: null };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.data.id,
          firstName: action.data.first_name,
          lastName: action.data.last_name,
          email: action.data.email,
          image: action.data.image,
        }
      };
    default:
      return state;
  }
}