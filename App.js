import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/reducers';
import {Routes} from './src/pages/routes';

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <Routes/>
    </Provider>
  );
}
