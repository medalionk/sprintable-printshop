import {connect} from 'react-redux';
import AppView from './App';

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn: state.auth.isLoggedIn,
});

///const mapDispatchToProps = (dispatch) => ({
  //refresh: () => dispatch({type: 'GET_MOVIE_DATA'}),
//});

export default connect(
   mapStateToProps
   //mapDispatchToProps
)(AppView);