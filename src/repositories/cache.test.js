import { expect } from 'chai';
import cache from './cache';

describe('Cache', () => {
  describe('set() and get()', () => {
    describe('when is an object', () => {
      beforeEach(() => cache.set('oompa', { name: 'lucas' }));

      it('stores it stringified', () => {
        cache.get('oompa').then((result) => {
          expect(result).to.eql(JSON.stringify({ name: 'lucas' }));
        });
      });
    });

    describe('when is an string', () => {
      beforeEach(() => cache.set('oompa', 'lucas'));

      it('stores it as it is', () => {
        cache.get('oompa').then((result) => {
          expect(result).to.eql('lucas');
        });
      });
    });
  });

  describe('set(), del() and get()', () => {
    beforeEach(() => cache.set('oompa', 'lucas')
      .then(() => cache.del('oompa')));

    it('the element is not anymore in the cache', () => {
      cache.get('oompa').then((result) => {
        expect(result).to.eql(undefined);
      });
    });
  });
});
