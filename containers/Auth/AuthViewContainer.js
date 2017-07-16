import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import AuthView from './AuthView';

const mapDispatchToProps = (dispatch) => ({
  navigate: bindActionCreators(NavigationActions.navigate, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(AuthView);
