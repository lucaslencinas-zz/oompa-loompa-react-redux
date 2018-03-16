import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import Navbar from './Navbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withRouter(<Navbar />), div);
  ReactDOM.unmountComponentAtNode(div);
});
