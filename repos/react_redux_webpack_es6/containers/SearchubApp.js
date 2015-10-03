import { connect } from 'react-redux';
import Searchub from '../components/Searchub';

function mapStateToProps(state) {
  const { isFetching, user, repos } = state;
  return {
    isFetching,
    user,
    repos
  };
}

export default connect(mapStateToProps)(Searchub);
