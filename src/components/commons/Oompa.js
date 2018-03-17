import PropTypes from 'prop-types';

const OompaPropTypes = PropTypes.shape({
  last_name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  quota: PropTypes.string,
  height: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  favorite: PropTypes.shape({
    color: PropTypes.string.isRequired,
    food: PropTypes.string.isRequired,
    random_string: PropTypes.string.isRequired,
    song: PropTypes.string.isRequired
  }).isRequired,
  gender: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
});

export default OompaPropTypes;
