import { SET_PRE_ORDER } from './actions';

//récupère action.js et affiche les données

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRE_ORDER:
      return action.preOrder;
    default:
      return state;
  }
};
