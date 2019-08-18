import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import home from 'reducers/homeReducer';
import user from 'reducers/userReducer';
import energeeApp from 'reducers/energeeAppReducer';

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
  energeeApp: {
    gyms: {
      list: [],
      selected: 0,
    },
    programs: {
      list: [
        {
          name: "Push/Pull/Legs",
          type: "anaerobic"
        },
        {
          name: "Starting Strengths",
          type: "anaerobic"
        },
        {
          name: "Stronglifts",
          type: "anaerobic"
        },
        {
          name: "Couch to 5K",
          type: "aerobic"
        }
      ],
      selected: 0,
    }
  },
};

export default(history) => combineReducers({
  router: connectRouter(history),
  home,
  user,
  energeeApp,
})