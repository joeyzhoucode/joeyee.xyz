import { initialState } from './rootReducer';
import webSocketConnection from "utils/webSocketConnection";
import { MESSAGE_TYPE } from 'utils/webSocketConnection';
import { 
  SAVE_INSTALL_PROMPT,
  MESSENGER_FETCH_SUCCESS,
  MESSENGER_SUBSCRIBE,
  MESSENGER_UNSUBSCRIBE,
  MESSENGER_RECIEVE,
  MESSENGER_BROADCAST,
  } from '../actions/homeActions';

export default function home(state = initialState.home, action) {
  let newState;
  let newMessages;
  switch (action.type) {
    case SAVE_INSTALL_PROMPT:
      newState = {
        ...state,
        installPrompt: action.installPrompt,
      }
      return newState;
    case MESSENGER_FETCH_SUCCESS:
      newMessages = [];
      for (const message of action.data){
        newMessages.push({
          userName: message.first_name + " " + message.last_name,
          content: message.content,
        })
      }
      newState = {
        ...state,
        messages: newMessages,
      }
      return newState;
    case MESSENGER_SUBSCRIBE:
      const connection = state.connection || new webSocketConnection(action.userId, action.callback, MESSAGE_TYPE);
      connection.openNewGroup(action.groupName);
      newState = {
        ...state,
        connection: connection,
      }
      return newState;
    case MESSENGER_UNSUBSCRIBE:
      if(state.connection) {
        state.connection.disconnect();
        delete state.connection;
      }
      newState = {
        ...state,
        connection: null,
      }
      return newState;
    case MESSENGER_RECIEVE:
      newMessages = state.messages;
      newMessages.push({
        userName: action.data.user.first_name + " " + action.data.user.last_name,
        content: action.data.content,
      })
      newState = {
        ...state,
        messages: newMessages,
      }
      return newState;
    case MESSENGER_BROADCAST:
      state.connection.message(action.data.message, action.data.groupName);
      return state;
    default:
      return state;
  }
}