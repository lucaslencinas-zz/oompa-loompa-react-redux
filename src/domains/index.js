import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  actions as oompasActions,
  selectors as oompasSelectors,
  reducers as oompasReducers
} from './oompas';

export const reducers = combineReducers({
  oompas: oompasReducers,
  routing: routerReducer
});

export const actions = {
  ...oompasActions
};

export const selectors = {
  ...oompasSelectors
};
