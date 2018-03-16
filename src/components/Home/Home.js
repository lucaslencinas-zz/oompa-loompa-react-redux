import React from 'react';
import Search from './Search';
import Grid from './Grid';
import './Home.css';

class Home extends React.Component {
  componentDidMount() {
    const {
      oompas = [],
      onLoadOompas
    } = this.props;

    if (oompas.length === 0) {
      onLoadOompas();
    }
  }

  render() {
    const {
      oompas = []
    } = this.props;

    return (
      <div className="home">
        <Search />
        <h1>Find your Oompa Loompa</h1>
        <h3>There are more than 100k</h3>
        <Grid oompas={oompas} />
      </div>
    )
  }
}

export default Home;
