import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Grid from './Grid';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { oompas: this.props.oompas || [] };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  componentDidMount() {
    const {
      oompas = [],
      onLoadOompas
    } = this.props;

    if (oompas.length === 0) {
      onLoadOompas();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ oompas: nextProps.oompas });
  }

  getFilteredOompas(text) {
    const searchTerms = text.trim().split(' ');
    let oompaText;

    return this.props.oompas.filter((oompa) => {
      oompaText = [oompa.first_name, oompa.last_name, oompa.profession].join(' ').toLowerCase();
      return searchTerms.every((term) => oompaText.includes(term));
    });
  }

  handleSearchChange(value) {
    this.setState({ oompas: this.getFilteredOompas(value) });
  }

  render() {
    return (
      <div className="home">
        <Search handleChange={this.handleSearchChange} />
        <h1>Find your Oompa Loompa</h1>
        <h3>There are more than 100k</h3>
        <Grid oompas={this.state.oompas} />
      </div>
    );
  }
}

Home.propTypes = {
  oompas: PropTypes.string.isRequired,
  onLoadOompas: PropTypes.func.isRequired
};

export default Home;
