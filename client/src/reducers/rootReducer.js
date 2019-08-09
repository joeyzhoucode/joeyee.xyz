import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import global from 'reducers/globalReducer';
import user from 'reducers/userReducer';

export const initialState = {
  global: {
    
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
  global,
  user,
})