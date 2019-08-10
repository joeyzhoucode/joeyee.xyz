import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import home from 'reducers/homeReducer';
import user from 'reducers/userReducer';

export const initialState = {
  home: {
    installPrompt: null,
  },
  user: {
    id: null,
    firstName: "Guest",
    lastName: "User",
    email: null,
    image: null,
  },
};

export default(history) => combineReducers({
  router: connectRouter(history),
  home,
  user,
})