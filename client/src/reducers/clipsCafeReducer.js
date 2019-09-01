import { initialState } from './rootReducer';
import webSocketConnection from "utils/webSocketConnection";
import {
  PLAYER_MOUNT,
  PLAYER_COMMAND_FETCH_SUCCESS,
  PLAYER_SUBSCRIBE,
  PLAYER_UNSUBSCRIBE,
  PLAYER_COMMAND_RECIEVE,
  PLAYER_COMMAND_BROADCAST
} from '../actions/clipsCafeActions';

export default function clipsCafe(state = initialState.clipsCafe, action) {
  let newState;
  let videoId;
  let videoSeek;
  let videoState;
  switch(action.type) {
    case PLAYER_MOUNT:
      newState = {
        ...state,
        player: action.player,
      }
      return newState;
    case PLAYER_COMMAND_FETCH_SUCCESS:
      videoId = action.data.video_id || state.player.props.url;
      videoSeek = action.data.seek_seconds || 0;
      videoState = 0;
      newState = {
        ...state,
        videoId: videoId,
        videoState: 0,
      }
      newState.player.seekTo(videoSeek);
      return newState;
    case PLAYER_SUBSCRIBE:
      const connection = state.connection ||
        new webSocketConnection("ClipsCafe", action.connectionType, action.callback);
      connection.openNewGroup(state.groupName);
      newState = {
        ...state,
        connection: connection,
      }
      return newState;
    case PLAYER_UNSUBSCRIBE:
      if(state.connection) {
        state.connection.disconnect();
        delete state.connection;
      }
      newState = {
        ...state,
        connection: null,
      }
      return newState;
    case PLAYER_COMMAND_RECIEVE:
      videoId = action.data.video_id || state.player.props.url;
      videoSeek = action.data.seek_seconds || 0;
      videoState = action.data.state || 0;
      newState = {
        ...state,
        videoId: videoId,
        videoState: videoState,
      }
      if(Math.floor(videoSeek/5) !== Math.floor(state.player.getCurrentTime()/5)) {
        newState.player.seekTo(videoSeek);
      }
      return newState;
    case PLAYER_COMMAND_BROADCAST:
      videoId = action.data.videoId || state.player.props.url;
      videoSeek = state.player.getCurrentTime() || 0.0;
      videoState = action.data.videoState || 0;
      state.connection.broadcast({
        videoId: videoId,
        videoSeek: videoSeek,
        videoState: videoState
      }, state.groupName);
      return state;
    default:
      return state;
  }
}