import { combineReducers } from 'redux';
import login from './login';
import newReleases from './newReleases';
import preOrder from './preOrder';
import lastChance from './lastChance';
import topPicks from './topPicks';

export default combineReducers({
  login,
  newReleases,
  preOrder,
  lastChance,
  topPicks,
});
