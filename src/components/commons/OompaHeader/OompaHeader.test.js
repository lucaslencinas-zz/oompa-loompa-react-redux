import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import OompaHeader from './OompaHeader';

describe('OompaHeader', () => {
  let oompa;

  describe('With a male oompa', () => {
    beforeEach(() => {
      oompa = {
        first_name: 'lucas',
        last_name: 'lencinas',
        gender: 'M',
        profession: 'Software Engineer'
      };
    });

    it('Renders all the fields of the oompa', () => {
      const oompaHeader = shallow(<OompaHeader oompa={oompa} />);
      const name = oompaHeader.find('div').at(1).text();
      const gender = oompaHeader.find('div').at(2).text();
      const profession = oompaHeader.find('div').at(3).text();

      expect(gender).to.equal('Male');
      expect(name).to.equal('lucas lencinas');
      expect(profession).to.equal('Software Engineer');
    });
  });

  describe('With a female oompa', () => {
    beforeEach(() => {
      oompa = {
        first_name: 'florencia',
        last_name: 'lencinas',
        gender: 'F',
        profession: 'Chef'
      };
    });

    it('Renders all the fields of the oompa', () => {
      const oompaHeader = shallow(<OompaHeader oompa={oompa} />);
      const name = oompaHeader.find('div').at(1).text();
      const gender = oompaHeader.find('div').at(2).text();
      const profession = oompaHeader.find('div').at(3).text();

      expect(gender).to.equal('Female');
      expect(name).to.equal('florencia lencinas');
      expect(profession).to.equal('Chef');
    });
  });
});
