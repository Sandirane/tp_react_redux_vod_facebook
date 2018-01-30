import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import reducer from './redux';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { getNewReleases } from './redux/newReleases/actions';
import { getPreOrder } from './redux/preOrder/actions';
import { getLastChance } from './redux/lastChance/actions';
import { getTopPicks } from './redux/topPicks/actions';
import './index.html';

//Sert à importer pour l'index.html (structure)

const store = createStore(reducer, compose(applyMiddleware(thunk)));

store.dispatch(getNewReleases());
store.dispatch(getPreOrder());
store.dispatch(getLastChance());
store.dispatch(getTopPicks());

const container = document.getElementById('app-container');

// Render App
ReactDOM.render(
  <BrowserRouter>
    <AppContainer>
      <Provider store={store} >
        <App />
      </Provider>
    </AppContainer>
  </BrowserRouter>,
  container,
);


// Hot module reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <BrowserRouter>
        <AppContainer>
          <Provider store={store} >
            <App />
          </Provider>
        </AppContainer>
      </BrowserRouter>,
      container,
    );
  });
}
