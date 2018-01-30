import { API_URL } from '../../constants';

// va recupérer l'api json pour afficher les données

export const SET_LAST_CHANCE = 'SET_LAST_CHANCE';

export function getLastChance() {
  return dispatch =>
    fetch(`${API_URL}/lastChance`)
      .then(res => res.json())
      .then(res => res)
      .then(lastChance => {
        dispatch(setLastChance(lastChance));
      });
}

export function setLastChance(lastChance) {
  return {
    type: SET_LAST_CHANCE,
    lastChance,
  };
}
