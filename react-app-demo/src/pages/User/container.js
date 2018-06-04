import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer, { fetchRepos, addRepo, removeRepo, favorRepo } from './widgets';
import saga from './sagas';
import User from './component';

const mapStateToProps = (state, props) => ({
  isFetching: state.get('userRepos').get('isFetching'),
  data: state.get('userRepos').get('data'),
  user: props.match.params.user
});
const mapDispatchToProps = { fetchRepos, addRepo, removeRepo, favorRepo };

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'userRepos', reducer });
const withSagas = injectSaga({ key: 'userRepos', saga });

// compose(f, g, h) -------> (...args) => f(g(h(...args)))
export default compose(
  withReducer,
  withSagas,
  withConnect // `withConnect` should always after `withReducer` here.
)(User);
