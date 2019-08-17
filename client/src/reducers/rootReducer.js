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
      locations: [],
      selectedGym: 0,
    },
    programs: {
      anaerobic: {
        plans: [
          {
            name: "Push/Pull"
          },
          {
            name: "Starting Strengths"
          },
          {
            name: "Stronglifts"
          },
        ],
        selectedPlan: 0
      },
      aerobic: {
        plans: [
          {
            name: "Couch to 5K"
          }
        ],
        selectedPlan: 0
      }
    }
  },
};

export default(history) => combineReducers({
  router: connectRouter(history),
  home,
  user,
  energeeApp,
})