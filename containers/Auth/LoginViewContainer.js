import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import LoginView from './LoginView';

const mapDispatchToProps = (dispatch) => ({
  navigate: bindActionCreators(NavigationActions.navigate, dispatch)
});

export default connect(
   null,
   mapDispatchToProps
)(LoginView);
