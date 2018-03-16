import React from 'react';
import { Link } from 'react-router-dom';

class OompaDetail extends React.Component {
  componentDidMount() {
    const {
      oompa = {},
      urlId = '',
      onLoadOompa
    } = this.props;

    if (!oompa.id || oompa.isPartial) {
      onLoadOompa(urlId);
    }
  }

  render() {
    const {
      oompa = {}
    } = this.props;

    return (
      <div>
        <h1>OompaDetail</h1>
        <div>{oompa.image}</div>
        <div>{oompa.first_name}</div>
        <div>{oompa.last_name}</div>
        <div>{oompa.gender === 'F' ? 'Female' : 'Male'}</div>
        <div>{oompa.profession}</div>
        <div>{oompa.description}</div>
      </div>
    );
  }
}

export default OompaDetail;
