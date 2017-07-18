import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { fetchJobs } from '../../redux/actions';
import JobsView from './JobsView';

const mapStateToProps = (state, ownProps) => ({
    data: state.jobs.data,
    dataFetched: state.jobs.dataFetched,
    isFetching: state.jobs.isFetching,
    error: state.jobs.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: () => dispatch(fetchJobs())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(JobsView);