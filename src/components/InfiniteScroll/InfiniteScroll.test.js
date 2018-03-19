import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import InfiniteScroll from './InfiniteScroll';

describe('InfiniteScroll', () => {
  let infiniteScroll;
  let loadMore;
  let hasMore;
  let isFiltering;

  describe('Renders the first time', () => {
    beforeEach(() => {
      hasMore = true;
      isFiltering = false;
      loadMore = sinon.spy();

      infiniteScroll = shallow(
        <InfiniteScroll
          hasMore={hasMore}
          isFiltering={isFiltering}
          onLoadMore={loadMore}
        >
          <div>My Grid</div>
        </InfiniteScroll>
      );
    });

    it('Renders a div with the children data', () => {
      const miGridDiv = infiniteScroll.find('div').at(0);
      expect(miGridDiv.text()).to.eql('My Grid');
    });

    it('Avoid showing the loading element', () => {
      const loading = infiniteScroll.find('[className="loading"]');
      expect(loading.exists()).to.eql(false);
    });
  });

  describe('When calling the handleScroll function', () => {
    let handleScroll;
    let setStateSpy;

    beforeEach(() => {
      hasMore = true;
      isFiltering = false;
      loadMore = sinon.stub().returns(Promise.resolve());

      infiniteScroll = shallow(
        <InfiniteScroll
          hasMore={hasMore}
          isFiltering={isFiltering}
          onLoadMore={loadMore}
        >
          <div>My Grid</div>
        </InfiniteScroll>
      );
      // eslint-disable-next-line prefer-destructuring
      handleScroll = infiniteScroll.instance().handleScroll;
      sinon.stub(infiniteScroll.instance(), 'atBottom').callsFake(() => true);
      setStateSpy = sinon.spy(infiniteScroll.instance(), 'setState');
      handleScroll();
    });

    it('Calls the setState', () => {
      expect(setStateSpy.called).to.eql(true);
    });

    it('Calls the onLoadMore prop', () => {
      expect(loadMore.called).to.eql(true);
    });
  });
});
