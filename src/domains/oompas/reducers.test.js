import { expect } from 'chai';
import * as types from './actionTypes';
import reducers from './reducers';

describe('Oompas reducer', () => {
  let oompas;
  let oompa;
  let initialState;
  let newState;
  let action;

  beforeEach(() => {
    initialState = {
      list: [],
      data: {},
      currentPage: 0,
      hasMoreOompas: false
    };
  });

  describe('when no action is triggered', () => {
    it('return the initial state', () => {
      expect(reducers(initialState, {})).to.deep.equal(initialState);
    });
  });

  describe('when an oompa is fetched successfully', () => {
    beforeEach(() => {
      initialState = {
        list: [],
        data: {},
        currentPage: 0,
        hasMoreOompas: false
      };
      oompa = {
        first_name: 'Marcy',
        last_name: 'Karadzas',
        favorite: {
          song: '123',
          random_string: 'red',
          color: 'red',
          food: 'Chocolat'
        },
        gender: 'F',
        image: 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/1.jpg',
        profession: 'Developer',
        email: 'mkaradzas1@visualengin.com',
        age: 21,
        country: 'Loompalandia',
        height: 99,
        id: 9
      };
      action = { type: types.FETCH_OOMPA_SUCCESS, oompa };
      newState = reducers(initialState, action);
    });

    it('stores the oompa with partial false', () => {
      expect(newState.data['9']).eql({ ...oompa, isPartial: false });
    });
  });

  describe('when new oompas are fetched', () => {
    beforeEach(() => {
      oompas = [
        {
          first_name: 'Marcy',
          last_name: 'Karadzas',
          favorite: {
            song: '123',
            random_string: 'red',
            color: 'red',
            food: 'Chocolat'
          },
          gender: 'F',
          image: 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/1.jpg',
          profession: 'Developer',
          email: 'mkaradzas1@visualengin.com',
          age: 21,
          country: 'Loompalandia',
          height: 99,
          id: 1
        },
        {
          first_name: 'Evangelia',
          last_name: 'Cowin',
          favorite: {
            song: '123',
            random_string: 'red',
            color: 'red',
            food: 'cocoa nuts'
          },
          gender: 'M',
          image: 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/2.jpg',
          profession: 'Metalworker',
          email: 'ecowin2@visualengin.com',
          age: 22,
          country: 'Loompalandia',
          height: 96,
          id: 2
        }
      ];
      action = { type: types.FETCH_OOMPAS_SUCCESS, oompas, currentPage: 1 };
      newState = reducers(initialState, action);
    });

    it('stores the oompas in the list', () => {
      expect(newState.list).to.eql([1, 2]);
    });

    it('stores the oompas in state.data', () => {
      expect(newState.data[oompas[0].id]).to.eql({ ...oompas[0], isPartial: true });
      expect(newState.data[oompas[1].id]).to.eql({ ...oompas[1], isPartial: true });
    });

    it('sets the currentPage', () => {
      expect(newState.currentPage).to.equal(1);
    });

    it('sets the hasMoreOompas', () => {
      expect(newState.hasMoreOompas).to.equal(false);
    });
  });
});
