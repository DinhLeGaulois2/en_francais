import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducer from './reducer';
import MainComponent from './MainComponent'

const store = createStore(reducer,
  applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>,
    document.querySelector('#root')
);

export default store