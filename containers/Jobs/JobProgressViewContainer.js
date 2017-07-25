import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { fetchJob, closeJob } from '../../redux/actions';
import JobView from './JobProgressView';

const mapStateToProps = (state, ownProps) => ({
    data: state.job.data,
    dataFetched: state.job.dataFetched,
    isFetching: state.job.isFetching,
    error: state.job.error,

    closeId: state.close.id,
    closeData: state.close.data,
    isClosing: state.close.isClosing,
    closed: state.close.closed,
    closeError: state.close.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchJob: (id) => dispatch(fetchJob(id)),
  closeJob: (id) => dispatch(closeJob(id))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(JobView);