import React from 'react';
import ReactDOM from 'react-dom';
import OompaHeader from './OompaHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OompaHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
