import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Searchub from '../components/Searchub';
import * as Actions from '../actions/index';

function mapStateToProps(state) {
  return {
    list: state.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchub);
