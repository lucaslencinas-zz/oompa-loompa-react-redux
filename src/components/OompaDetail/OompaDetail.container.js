import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions, selectors } from '../../domains';
import OompaDetail from './OompaDetail';

const mapStateToProps = (state, { match }) => ({
  urlId: match.params.id,
  oompa: selectors.oompa(state, match.params)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onLoadOompa: actions.fetchOompa,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OompaDetail)
