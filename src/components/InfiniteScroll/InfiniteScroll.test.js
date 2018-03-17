import React from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from './InfiniteScroll';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfiniteScroll onLoadOompa={() => null} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
