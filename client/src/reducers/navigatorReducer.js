import { initialState } from './rootReducer';
import webSocketConnection from "utils/webSocketConnection";
import { MESSAGE_TYPE } from 'utils/webSocketConnection';
import { 
  INSTALL_PROMPT_SAVE,
  INSTALL_PROMPT_DESTROY,
  MESSAGES_FETCH_SUCCESS,
  CHANNEL_SUBSCRIBE,
  CHANNEL_UNSUBSCRIBE,
  CHANNEL_RECIEVE,
  CHANNEL_BROADCAST,
  USER_FETCH_SUCCESS
  } from '../actions/navigatorActions';

export default function navigator(state = initialState.navigator, action) {
  let newMessages;
  switch (action.type) {
    case INSTALL_PROMPT_SAVE:
      return { ...state, installPrompt: action.installPrompt };
    case INSTALL_PROMPT_DESTROY:
      return { ...state, installPrompt: null };
    case MESSAGES_FETCH_SUCCESS:
      newMessages = [];
      for (const message of action.data){
        newMessages.push({
          userName: message.first_name + " " + message.last_name,
          content: message.content,
        })
      }
      return { ...state, messages: newMessages };
    case CHANNEL_SUBSCRIBE:
      const connection = state.connection || new webSocketConnection(action.userId, action.callback, MESSAGE_TYPE);
      connection.openNewGroup(action.groupName);
      return { ...state, connection: connection };
    case CHANNEL_UNSUBSCRIBE:
      if(state.connection) {
        state.connection.disconnect();
        delete state.connection;
      }
      return { ...state, connection: null };
    case CHANNEL_RECIEVE:
      newMessages = state.messages;
      newMessages.push({
        userName: action.data.user.first_name + " " + action.data.user.last_name,
        content: action.data.content,
      })
      return { ...state, messages: newMessages };
    case CHANNEL_BROADCAST:
      state.connection.message(action.data.message, action.data.groupName);
      return state;
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