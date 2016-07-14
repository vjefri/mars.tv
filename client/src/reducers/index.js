import { combineReducers } from 'redux';
import main from './main';
import player from './player';

export default combineReducers({
  main: main,
  player: player
});
