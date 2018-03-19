import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import storage from '../../repositories/oompaStorage';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Oompas Actions', () => {
  describe('Fetching', () => {
    let oompa;
    let oompas;
    let initialState;
    let store;
    let expectedActions;

    describe('When the fetching the Oompas', () => {
      beforeEach(() => {
        initialState = {
          oompas: {
            list: [],
            data: {},
            currentPage: 0,
            hasMoreOompas: false
          }
        };

        store = mockStore(initialState);
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
        expectedActions = [{
          type: actionTypes.FETCH_OOMPAS_SUCCESS,
          oompas,
          currentPage: 1
        }];

        sinon.stub(storage, 'getOompas').callsFake(() => Promise.resolve({ current: 1, results: oompas }));

        return store.dispatch(actions.fetchOompas());
      });

      it('creates FETCH_OOMPAS_SUCCESS', () => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });

    describe('When the fetching only an Oompa', () => {
      beforeEach(() => {
        store = mockStore(initialState);
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
          height: 99
        };
        expectedActions = [{
          type: actionTypes.FETCH_OOMPA_SUCCESS,
          oompa: { ...oompa, id: 1 }
        }];

        sinon.stub(storage, 'getOompa').callsFake(() => Promise.resolve(oompa));

        return store.dispatch(actions.fetchOompa(1));
      });

      it('creates FETCH_OOMPA_SUCCESS', () => {
        expect(store.getActions()).to.eql(expectedActions);
      });
    });
  });
});
