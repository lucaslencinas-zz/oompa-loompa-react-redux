import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import OompaDetail from './OompaDetail';

describe('OompaDetail', () => {
  let oompaDetail;
  let urlId;
  let onLoadOompa;

  describe('When shallowing', () => {
    beforeEach(() => {
      urlId = '5';
      onLoadOompa = sinon.spy();
      oompaDetail = shallow((
        <OompaDetail
          onLoadOompa={onLoadOompa}
          urlId={urlId}
          oompa={oompa}
        />
      ));
    });

    it('Renders the elements and tags correctly', () => {
      const img = oompaDetail.find('img');
      const oompaHeader = oompaDetail.find('OompaHeader');
      const description = oompaDetail.find('[className="oompa-detail-description"]');
      expect(img.prop('src')).to.equal(oompa.image);
      expect(oompaHeader.prop('oompa')).to.equal(oompa);
      expect(description.prop('dangerouslySetInnerHTML')).to.eql({ __html: oompa.description });
    });
  });

  describe('When mounting with no oompa', () => {
    beforeEach(() => {
      urlId = '5';
      onLoadOompa = sinon.spy();
      oompaDetail = mount((
        <OompaDetail
          onLoadOompa={onLoadOompa}
          urlId={urlId}
        />
      ));
    });

    it('Calls onLoadOompa to get the oompa', () => {
      expect(onLoadOompa.calledWith('5')).to.equal(true);
    });
  });

  describe('When mounting with partial oompa', () => {
    beforeEach(() => {
      urlId = '5';
      onLoadOompa = sinon.spy();
      oompaDetail = mount((
        <OompaDetail
          onLoadOompa={onLoadOompa}
          urlId={urlId}
          oompa={{ ...oompa, isPartial: true }}
        />
      ));
    });

    it('No need to call onLoadOompa', () => {
      expect(onLoadOompa.calledWith('5')).to.equal(true);
    });
  });

  describe('When mounting with full oompa', () => {
    beforeEach(() => {
      urlId = '5';
      onLoadOompa = sinon.spy();
      oompaDetail = mount((
        <OompaDetail
          onLoadOompa={onLoadOompa}
          urlId={urlId}
          oompa={oompa}
        />
      ));
    });

    it('No need to call onLoadOompa', () => {
      expect(onLoadOompa.called).to.equal(false);
    });
  });
});

const oompa = {
  id: '5',
  last_name: 'Kenealy',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  image: 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/7.jpg',
  profession: 'Brewer',
  quota: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nullam cursus lacinia erat. Praesent blandit laoreet nibh. Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque id mi. Ut tincidunt tincidunt erat. Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue. Curabitur vestibulum aliquam leo. Praesent egestas neque eu enim. In hac habitasse platea dictumst. Fusce a quam. Etiam ut purus mattis mauris sodales aliquam. Curabitur nisi. Quisque malesuada placerat nisl. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero. Praesent nonummy mi in odio. Nunc interdum lacus sit amet orci. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Morbi mollis tellus',
  height: 100,
  first_name: 'Shepard',
  country: 'Loompalandia',
  age: 20,
  favorite: {
    color: 'red',
    food: 'Chocolat',
    random_string: 'gUqn7iMUS25MyHUUymi1hRhwnPK8FwzIW8OOYnPMqgwg0cwl8FwfkwzUqgtOfQ',
    song: 'Oompa Loompas:\nOompa Loompa doompadee doo\nI\'ve got another puzzle for you\nOompa Loompa doompadah dee\nIf you are wise you\'ll listen to me\nWhat do you get from a glut of TV?\nA pain in the neck and an IQ of three\nWhy don\'t you try simply reading a book?\nOr could you just not bear to look?\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no commercials\nOompa Loompa Doompadee Dah\nIf you\'re like reading you will go far\nYou will live in happiness too\nLike the Oompa\nOompa Loompa doompadee do\nOompa Loompas:\nOompa Loompa doompadee doo\nI\'ve got another puzzle for you\nOompa Loompa doompadah dee\nIf you are wise you\'ll listen to me\nWhat do you get from a glut of TV?\nA pain in the neck and an IQ of three\nWhy don\'t you try simply reading a book?\nOr could you just not bear to look?\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no commercials\nOompa Loompa Doompadee Dah\nIf you\'re like reading you will go far\nYou will live in happiness too\nLike the Oompa\nOompa Loompa doompadee do\nOompa Loompas:\nOompa Loompa doompadee doo\nI\'ve got another puzzle for you\nOompa Loompa doompadah dee\nIf you are wise you\'ll listen to me\nWhat do you get from a glut of TV?\nA pain in the neck and an IQ of three\nWhy don\'t you try simply reading a book?\nOr could you just not bear to look?\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no commercials\nOompa Loompa Doompadee Dah\nIf you\'re like reading you will go far\nYou will live in happiness too\nLike the Oompa\nOompa Loompa doompadee do\nOompa Loompas:\nOompa Loompa doompadee doo\nI\'ve got another puzzle for you\nOompa Loompa doompadah dee\nIf you are wise you\'ll listen to me\nWhat do you get from a glut of TV?\nA pain in the neck and an IQ of three\nWhy don\'t you try simply reading a book?\nOr could you just not bear to look?\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no commercials\nOompa Loompa Doompadee Dah\nIf you\'re like reading you will go far\nYou will live in happiness too\nLike the Oompa\nOompa Loompa doompadee do\nOompa Loompas:\nOompa Loompa doompadee doo\nI\'ve got another puzzle for you\nOompa Loompa doompadah dee\nIf you are wise you\'ll listen to me\nWhat do you get from a glut of TV?\nA pain in the neck and an IQ of three\nWhy don\'t you try simply reading a book?\nOr could you just not bear to look?\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no commercials\nOompa Loompa Doompadee Dah\nIf you\'re like reading you will go far\nYou will live in happiness too\nLike the Oompa\nOompa Loompa doompadee do\nOompa Loompas:\nOompa Loompa doompadee doo\nI\'ve got another puzzle for you\nOompa Loompa doompadah dee\nIf you are wise you\'ll listen to me\nWhat do you get from a glut of TV?\nA pain in the neck and an IQ of three\nWhy don\'t you try simply reading a book?\nOr could you just not bear to look?\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no\nYou\'ll get no commercials\nOompa Loompa Doompadee Dah\nIf you\'re like reading you will go far\nYou will live in happiness too\nLike the Oompa\nOompa Loompa doompadee do'
  },
  gender: 'M',
  email: 'skenealy25@visualengin.com'
};
