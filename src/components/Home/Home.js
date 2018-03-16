import React from 'react';
import { Link } from 'react-router-dom';

const oompaUrl = ({ id }) => `/oompa-loompa/${id}`;

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
      <div>
        <div>Search bar</div>

        <h1>Find your Oompa Loompa</h1>
        <h3>There are more than 100k</h3>
        <div>
          <div>Oompa loompas Grid</div>
          {oompas.map((oompa, index) => (
            <div key={`${index}a`}>
              <Link to={oompaUrl(oompa)}>
                <div>{oompa.image}</div>
                <div>{oompa.first_name}</div>
                <div>{oompa.last_name}</div>
                <div>{oompa.gender === 'F' ? 'Female' : 'Male'}</div>
                <div>{oompa.profession}</div>
              </Link>
              <br/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Home;
