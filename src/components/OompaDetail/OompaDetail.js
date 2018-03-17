import React from 'react';
import PropTypes from 'prop-types';
import OompaHeader from '../commons/OompaHeader';
import './OompaDetail.css';

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
      <div className="oompa-detail">
        <img
          src={oompa.image}
          alt="OompaImage"
          className="oompa-detail-image"
        />
        <div className="oompa-content">
          <OompaHeader oompa={oompa} />
          <div className="oompa-detail-description">{oompa.description}</div>
        </div>
      </div>
    );
  }
}

OompaDetail.propTypes = {
  oompa: PropTypes.arrayOf(PropTypes.object).isRequired,
  urlId: PropTypes.string.isRequired,
  onLoadOompa: PropTypes.func.isRequired
};

export default OompaDetail;
