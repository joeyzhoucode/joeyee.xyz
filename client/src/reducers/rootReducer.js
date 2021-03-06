import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import navigator from 'reducers/navigatorReducer';
import gymLab from 'reducers/gymLabReducer';
import clipsCafe from 'reducers/clipsCafeReducer';

export const initialState = {
  navigator: {
    connection: null,
    installPrompt: null,
    user: {
      id: null,
      firstName: "Guest",
      lastName: "User",
      email: null,
      image: null,
    },
  },
  gymLab: {
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
  clipsCafe: {
    videoId: "https://www.youtube.com/watch?v=pQV0WEdT_OE",
    videoState: 0,
    connection: null,
    player: null,
    groupName: "Global"
  }
};

export default(history) => combineReducers({
  router: connectRouter(history),
  navigator,
  gymLab,
  clipsCafe
})