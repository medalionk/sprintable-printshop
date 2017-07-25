import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { fetchWIP } from '../../redux/actions';
import WIPView from './WIPView';

const mapStateToProps = (state, ownProps) => ({
    data: state.wip.data,
    dataFetched: state.wip.dataFetched,
    isFetching: state.wip.isFetching,
    error: state.wip.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWIP: () => dispatch(fetchWIP())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(WIPView);
