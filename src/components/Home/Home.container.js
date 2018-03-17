import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from '../../domains';
import Home from './Home';

const mapStateToProps = (state) => ({
  oompas: selectors.oompas(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onLoadOompas: actions.fetchOompas
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
