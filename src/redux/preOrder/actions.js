import { API_URL } from '../../constants';

// va recupérer l'api json pour afficher les données

export const SET_PRE_ORDER = 'SET_PRE_ORDER';

export function getPreOrder() {
  return dispatch =>
    fetch(`${API_URL}/preOrder`)
      .then(res => res.json())
      .then(res => res)
      .then(preOrder => {
        dispatch(setPreOrder(preOrder));
      });
}

export function setPreOrder(preOrder) {
  return {
    type: SET_PRE_ORDER,
    preOrder,
  };
}
