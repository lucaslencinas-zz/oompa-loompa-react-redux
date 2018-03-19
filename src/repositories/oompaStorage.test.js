import { expect } from 'chai';
import storage from './oompaStorage';

describe('Storage', () => {
  let oompas;
  let oompa;

  describe('setOompas() and getOompas()', () => {
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
      return storage.setOompas({ current: 1, results: oompas });
    });

    it('stores and retrieve it correctly', () => {
      storage.getOompas(1).then(($result) => {
        expect($result).to.eql({ current: 1, results: oompas });
      });
    });
  });

  describe('setOompa() and getOompa()', () => {
    beforeEach(() => {
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
        id: 1
      };
      return storage.setOompa(oompa);
    });

    it('stores and retrieve it correctly', () => {
      storage.getOompa(1).then(($result) => {
        expect($result).to.eql(oompa);
      });
    });
  });
});
