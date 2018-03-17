import PropTypes from 'prop-types';
import React from 'react';
import './InfiniteScroll.css';

class InfiniteScroll extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };
    this.handleScroll = this.handleScroll.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.atBottom = this.atBottom.bind(this);
    this.renderLoadingElement = this.renderLoadingElement.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // eslint-disable-next-line class-methods-use-this
  atBottom() {
    return (window.innerHeight + window.pageYOffset) === document.body.scrollHeight;
  }

  handleScroll() {
    if (this.atBottom() && this.props.hasMore && !this.state.isLoading && !this.props.isFiltering) {
      this.loadMore();
    }
  }

  loadMore() {
    this.setState({ isLoading: true });

    this.props.onLoadMore()
      .then(() => this.setState({ isLoading: false }));
  }

  renderLoadingElement() {
    const { isLoading } = this.state;
    return isLoading ?
      <div className="loading">
        <span>Loading Oompas...</span>
      </div> :
      null;
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
        {this.renderLoadingElement()}
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  hasMore: PropTypes.bool.isRequired,
  isFiltering: PropTypes.bool.isRequired,
  children: PropTypes.node,
  onLoadMore: PropTypes.func.isRequired
};

export default InfiniteScroll;
