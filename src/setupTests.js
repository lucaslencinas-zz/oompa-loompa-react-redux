import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  const localStorage = {};
  const localStorageMock = {
    getItem: (key) => localStorage[key],
    setItem: (key, value) => { localStorage[key] = value; },
    removeItem: (key) => { delete localStorage[key]; }
  };

  global.localStorage = localStorageMock;
});
