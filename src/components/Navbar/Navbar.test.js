import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('Displays the icon and text correctly', () => {
    const navbar = shallow(<Navbar />);
    const imageSrc = navbar.find('img').prop('src');
    const navbarText = navbar.find('[className="navbar-text"]').text();

    expect(imageSrc).to.equal('https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png');
    expect(navbarText).to.equal('Oompa Looompas Crew');
  });
});
