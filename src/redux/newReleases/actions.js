import { API_URL } from '../../constants';

// va recupérer l'api json pour afficher les données

export const SET_NEW_RELEASES = 'SET_NEW_RELEASES';

export function getNewReleases() {
  return dispatch =>
    fetch(`${API_URL}/newReleases`)
      .then(res => res.json())
      .then(res => res)
      .then(newReleases => {
        dispatch(setNewReleases(newReleases));
      });
}

export function setNewReleases(newReleases) {
  return {
    type: SET_NEW_RELEASES,
    newReleases,
  };
}
