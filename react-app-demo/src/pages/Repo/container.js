import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer, { fetchRepoLanguages } from './widgets';
import saga from './sagas';
import Repo from './component';

const mapStateToProps = (state) => ({
  isFetching: state.get('repoLanguages').get('isFetching'),
  data: state.get('repoLanguages').get('data')
});
const mapDispatchToProps = { fetchRepoLanguages };

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'repoLanguages', reducer });
const withSagas = injectSaga({ key: 'repoLanguages', saga });

export default compose(
  withReducer,
  withSagas,
  withConnect
)(Repo);
