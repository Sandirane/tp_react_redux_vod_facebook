import { SET_LAST_CHANCE } from './actions';

//récupère action.js et affiche les données

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LAST_CHANCE:
      return action.lastChance;
    default:
      return state;
  }
};
