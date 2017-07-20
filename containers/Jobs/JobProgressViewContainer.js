import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { fetchJob, closeJob } from '../../redux/actions';
import JobView from './JobProgressView';

const mapStateToProps = (state, ownProps) => ({
    data: state.jobs.data,
    dataFetched: state.jobs.dataFetched,
    isFetching: state.jobs.isFetching,
    error: state.jobs.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJob: (id) => dispatch(fetchJob(id)),
  closeJob: (id) => dispatch(closeJob(id))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(JobView);