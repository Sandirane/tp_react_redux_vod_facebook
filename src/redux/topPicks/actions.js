import { API_URL } from '../../constants';

// va recupérer l'api json pour afficher les données

export const SET_TOP_PICKS = 'SET_TOP_PICKS';

export function getTopPicks() {
  return dispatch =>
    fetch(`${API_URL}/topPicks`)
      .then(res => res.json())
      .then(res => res)
      .then(topPicks => {
        dispatch(setTopPicks(topPicks));
      });
}

export function setTopPicks(topPicks) {
  return {
    type: SET_TOP_PICKS,
    topPicks,
  };
}
