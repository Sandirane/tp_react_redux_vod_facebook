import { SET_TOKEN } from './actions';

const initialState = [];

////récupère action.js et le l'utilisateur du token par défault

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token;
    default:
      return state;
  }
};
