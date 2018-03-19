import { expect } from 'chai';
import * as selectors from './selectors';

describe.only('Oompas selectors', () => {
  let state;
  let oompas;
  let oompa;
  let oompasFromList;

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

    state = {
      oompas: {
        data: {
          [oompas[0].id]: oompas[0],
          [oompas[1].id]: oompas[1]
        },
        list: [oompas[0].id, oompas[1].id]
      }
    };
  });

  describe('oompa()', () => {
    it('returns the oompa with the given id', () => {
      oompa = selectors.oompa(state, oompas[0]);
      expect(oompa).to.eql(oompas[0]);
    });
  });

  describe('oompas', () => {
    it('returns the oompas from the list', () => {
      oompasFromList = selectors.oompas(state);
      expect(oompasFromList).to.eql(oompas);
    });
  });
});
