import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import Card from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withRouter(<Card />), div);
  ReactDOM.unmountComponentAtNode(div);
});
