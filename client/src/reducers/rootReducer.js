import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import home from 'reducers/homeReducer';
import user from 'reducers/userReducer';

export const initialState = {
  home: {
    
  },
  user: {
    id: null,
    firstName: "John",
    lastName: "Doe",
    email: "John@Doe.com",
    image: null,
  },
};

export default(history) => combineReducers({
  router: connectRouter(history),
  home,
  user,
})