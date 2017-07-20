import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { fetchWIP } from '../../redux/actions';
import WIPView from './WIPView';

const mapStateToProps = (state, ownProps) => ({
    data: state.jobs.data,
    dataFetched: state.jobs.dataFetched,
    isFetching: state.jobs.isFetching,
    error: state.jobs.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWIP: () => dispatch(fetchWIP())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(WIPView);
