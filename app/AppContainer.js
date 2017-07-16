import {connect} from 'react-redux';
import AppView from './App';

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(AppView);
