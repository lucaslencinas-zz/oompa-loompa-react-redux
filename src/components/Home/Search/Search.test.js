import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search', () => {
  let handleChange;
  let search;

  describe('With empty searchTerm', () => {
    beforeEach(() => {
      handleChange = sinon.spy();
      search = shallow(<Search handleChange={handleChange} />);
    });

    it('Renders the imput and img components correctly', () => {
      const input = search.find('input');
      const img = search.find('img');
      expect(input.prop('placeholder')).to.equal('Search');
      expect(img.prop('src')).to.equal('https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png');
    });
  });

  describe('When writing inside the input', () => {
    beforeEach(() => {
      handleChange = sinon.spy();
      search = shallow(<Search handleChange={handleChange} />);
      search.find('input').simulate('change', { target: { value: 'developer' } });
    });

    it('Calls the handleChange function with the new value', () => {
      expect(handleChange.calledWith('developer')).to.equal(true);
    });
  });
});
