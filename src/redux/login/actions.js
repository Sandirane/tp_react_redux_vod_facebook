export const SET_TOKEN = 'SET_TOKEN';

const user = {
  email: 'test@gmail.com',
  password: 'test',
};

//création d'un token par défault

export function getLogin() {
  return dispatch =>
    fetch('https://reqres.in/api/login', {
      method: 'post',
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(res => res)
      .then(token => {
        console.log('token', token);
        dispatch(setToken(token));
      });
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}
