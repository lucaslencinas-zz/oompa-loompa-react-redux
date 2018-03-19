import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let oompa;
  let card;

  beforeEach(() => {
    oompa = {
      id: 'some-id',
      image: 'https://some-url-of-the-image.jpg',
      first_name: 'lucas',
      last_name: 'lencinas',
      gender: 'F',
      profession: 'Chef'
    };
    card = shallow(<Card oompa={oompa} />);
  });

  it('Renders the Link with the correct url including the ID', () => {
    const url = card.find('Link').prop('to');
    expect(url).to.equal('/oompa-loompa/some-id');
  });

  it('Renders the img with the oompa image as src', () => {
    const imageSrc = card.find('img').prop('src');
    expect(imageSrc).to.equal('https://some-url-of-the-image.jpg');
  });

  it('Renders OompaHeader component passing it the oompa as prop', () => {
    const oompaHeader = card.find('OompaHeader');
    expect(oompaHeader.prop('oompa')).to.equal(oompa);
  });
});
