import React from 'react';
import PropTypes from 'prop-types';
import OompaPropTypes from '../commons/Oompa';
import Search from './Search';
import Grid from './Grid';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oompas: this.props.oompas || [],
      isFiltering: false
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  componentDidMount() {
    const { oompas = [], onLoadOompas } = this.props;

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
    this.setState({
      oompas: this.getFilteredOompas(value),
      isFiltering: value.trim().length > 0
    });
  }

  render() {
    const { oompas, isFiltering } = this.state;
    const { hasMoreOompas, onLoadOompas } = this.props;

    return (
      <div className="home">
        <Search handleChange={this.handleSearchChange} />
        <h1>Find your Oompa Loompa</h1>
        <h3>There are more than 100k</h3>
        <Grid
          oompas={oompas}
          hasMoreOompas={hasMoreOompas}
          onLoadOompas={onLoadOompas}
          isFiltering={isFiltering}
        />
      </div>
    );
  }
}

Home.propTypes = {
  oompas: PropTypes.arrayOf(OompaPropTypes),
  onLoadOompas: PropTypes.func.isRequired,
  hasMoreOompas: PropTypes.bool.isRequired
};

export default Home;
