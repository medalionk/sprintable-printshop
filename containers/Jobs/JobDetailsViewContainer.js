import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { fetchJob, acceptJob, rejectJob } from '../../redux/actions';
import JobDetailsView from './JobDetailsView';

const mapStateToProps = (state, ownProps) => ({
    data: state.job.data,
    dataFetched: state.job.dataFetched,
    isFetching: state.job.isFetching,
    error: state.job.error,

    acceptId: state.accept.id,
    acceptData: state.accept.data,
    isAccepting: state.accept.isAccepting,
    accepted: state.accept.accepted,
    acceptError: state.accept.error,

    rejectId: state.reject.id,
    rejectData: state.reject.data,
    isRejecting: state.reject.isRejecting,
    rejected: state.reject.rejected,
    rejectError: state.reject.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJob: (id) => dispatch(fetchJob(id)),
  acceptJob: (id) => dispatch(acceptJob(id)),
  rejectJob: (id) => dispatch(rejectJob(id)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(JobDetailsView);
