import React from 'react';
import PropTypes from 'prop-types';
import OompaPropTypes from '../commons/Oompa';
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
          <div
            className="oompa-detail-description"
            dangerouslySetInnerHTML={{ __html: oompa.description }}
          />
        </div>
      </div>
    );
  }
}

OompaDetail.propTypes = {
  oompa: OompaPropTypes,
  urlId: PropTypes.string.isRequired,
  onLoadOompa: PropTypes.func.isRequired
};

export default OompaDetail;
