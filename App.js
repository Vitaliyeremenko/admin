import React                       from 'react';
import {connect}                   from 'react-redux';
import './App.css';
import Login                       from './containers/Login';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import PrivateRoute                from './utils/PrivateRouter';
import {loginSuccess}              from './store/actions/auth.actions';
import AdminLte                    from './containers/AdminLTE';

class App extends React.Component {
  state = {
    initialLoading: true,
  };

  componentDidMount() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.props.loginSuccess(JSON.parse(userData));
    }
    this.setState({initialLoading: false});
  }

  render() {
    if (!this.state.initialLoading)
      return <Switch>
        <Route path="/login" component={Login} exact/>
        <PrivateRoute path="/income" component={AdminLte} exact/>
        <PrivateRoute path="/users" component={AdminLte} exact/>
        <PrivateRoute path="/withdrawal/confirmation" component={AdminLte} exact/>
        <PrivateRoute path="/withdrawal/wait" component={AdminLte} exact/>
        <PrivateRoute path="/withdrawal/paid" component={AdminLte} exact/>
        <PrivateRoute path="/withdrawal/canceled" component={AdminLte} exact/>
        <PrivateRoute path="/user/:id" component={AdminLte} exact/>
        <PrivateRoute path="/support" component={AdminLte} exact/>
        <PrivateRoute path="/support/:id" component={AdminLte} exact/>
        <PrivateRoute path="/dispute/active" component={AdminLte} exact/>
        <PrivateRoute path="/dispute/resolved" component={AdminLte} exact/>
        <PrivateRoute path="/settings/currencies" component={AdminLte} exact/>
        <PrivateRoute path="/settings/systems" component={AdminLte} exact/>
        <PrivateRoute path="/settings/faq" component={AdminLte} exact/>
        <PrivateRoute path="/settings/docs" component={AdminLte} exact/>
        <PrivateRoute path="/settings/pages" component={AdminLte} exact/>
        <PrivateRoute path="/settings/footer-links" component={AdminLte} exact/>
        <Redirect to={'/income'}/>
      </Switch>;
    else
      return null;
  }
}

const mapDispatchToProps = dispatch => ({
  loginSuccess: data => {dispatch(loginSuccess(data))},
});

export default withRouter(connect(null, mapDispatchToProps)(App));
