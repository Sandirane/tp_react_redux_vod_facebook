import { SET_NEW_RELEASES } from './actions';

//récupère action.js et affiche les données

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_RELEASES:
      return action.newReleases;
    default:
      return state;
  }
};
