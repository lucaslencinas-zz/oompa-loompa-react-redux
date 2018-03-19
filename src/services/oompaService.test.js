import { expect } from 'chai';
import sinon from 'sinon';
import * as oompaService from './oompaService';

describe('oompaService', () => {
  let oompasPromise;
  let oompaPromise;
  let oompa;
  let oompas;
  let response;
  let url;

  describe('list', () => {
    describe('when the service responds correctly', () => {
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
        response = { current: 1, results: oompas };
        url = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1';
        global.fetch = sinon.stub()
          .withArgs(url)
          .returns(new Promise((resolve) => {
            resolve({ json: () => response });
          }));

        oompasPromise = oompaService.list({ page: 1 });
      });

      it('should return a json with the oompas', () => {
        oompasPromise.then(($response) => {
          expect($response).to.eql(response);
        });
      });
    });
  });

  describe('get', () => {
    describe('when the service responds correclty', () => {
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
        response = oompa;
        url = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/1';
        global.fetch = sinon.stub()
          .withArgs(url)
          .returns(new Promise((resolve) => {
            resolve({ json: () => response });
          }));
        oompaPromise = oompaService.get({ page: 1 });
      });

      it('should return a json with an oompa', () => {
        oompaPromise.then(($response) => {
          expect($response).to.eql(response);
        });
      });
    });
  });
});
