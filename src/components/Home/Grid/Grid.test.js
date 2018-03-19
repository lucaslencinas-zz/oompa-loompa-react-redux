import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('Grid', () => {
  let oompas;
  let hasMoreOompas;
  let onLoadOompas;
  let isFiltering;
  let grid;

  describe('With no oompas', () => {
    beforeEach(() => {
      oompas = [];
      hasMoreOompas = true;
      onLoadOompas = jest.fn();
      isFiltering = true;
      grid = shallow(<Grid
        oompas={oompas}
        hasMoreOompas={hasMoreOompas}
        onLoadOompas={onLoadOompas}
        isFiltering={isFiltering}
      />);
    });

    it('Renders the InfiniteScroll with the same params', () => {
      const infiniteScroll = grid.find('InfiniteScroll');
      expect(infiniteScroll.prop('hasMore')).to.equal(true);
      expect(infiniteScroll.prop('onLoadMore')).to.equal(onLoadOompas);
      expect(infiniteScroll.prop('isFiltering')).to.equal(true);
    });

    it('Renders the grid but without any Card component', () => {
      const gridElement = grid.find('[className="grid"]');
      const cards = grid.find('[className="card-wrapper"]');
      expect(gridElement.exists()).to.equal(true);
      expect(cards.length).to.equal(0);
    });
  });

  describe('With oompas', () => {
    beforeEach(() => {
      oompas = [
        {
          first_name: 'Marcy',
          last_name: 'Karadzas',
          gender: 'F',
          image: 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/1.jpg',
          profession: 'Developer',
          favorite: {
            song: '123',
            random_string: 'asd',
            color: 'red',
            food: 'Chocolat'
          },
          email: 'mkaradzas1@visualengin.com',
          age: 21,
          country: 'Loompalandia',
          height: 99,
          id: 1
        },
        {
          first_name: 'Evangelia',
          last_name: 'Cowin',
          gender: 'M',
          image: 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/2.jpg',
          profession: 'Metalworker',
          favorite: {
            song: '123',
            random_string: 'asd',
            color: 'red',
            food: 'Chocolat'
          },
          email: 'mkaradzas1@visualengin.com',
          age: 21,
          country: 'Loompalandia',
          height: 99,
          id: 2
        },
        {
          first_name: 'Nesta',
          last_name: 'Pidgley',
          gender: 'F',
          image: 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/3.jpg',
          profession: 'Gemcutter',
          favorite: {
            song: '123',
            random_string: 'asd',
            color: 'red',
            food: 'Chocolat'
          },
          email: 'mkaradzas1@visualengin.com',
          age: 21,
          country: 'Loompalandia',
          height: 99,
          id: 3
        }
      ];
      hasMoreOompas = true;
      onLoadOompas = jest.fn();
      isFiltering = false;
      grid = shallow(<Grid
        oompas={oompas}
        hasMoreOompas={hasMoreOompas}
        onLoadOompas={onLoadOompas}
        isFiltering={isFiltering}
      />);
    });

    it('Renders the grid but without any Card component', () => {
      const gridElement = grid.find('[className="grid"]');
      const cards = grid.find('Card');
      expect(gridElement.exists()).to.equal(true);
      expect(cards.length).to.equal(3);
      expect(cards.at(0).prop('oompa')).to.equal(oompas[0]);
      expect(cards.at(1).prop('oompa')).to.equal(oompas[1]);
      expect(cards.at(2).prop('oompa')).to.equal(oompas[2]);
    });
  });
});
