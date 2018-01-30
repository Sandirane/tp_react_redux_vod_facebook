import { SET_TOP_PICKS } from './actions';

//récupère action.js et affiche les données

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_PICKS:
      return action.topPicks;
    default:
      return state;
  }
};
