import * as React                                                          from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row, Alert} from 'reactstrap';
import {connect}                                                           from 'react-redux';
import '../styles/Login.sass';
import {isLogin, validateLoginForm}                                        from '../utils/Helpers';
import {login}                                                             from '../store/actions/auth.actions';
import {withRouter}                                                        from 'react-router-dom';

class Login extends React.Component {
  state = {
    userEmail: '',
    userPassword: '',
    error: '',
    loading: false,
  };

  inputChangeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  setError = error => {
    this.setState({error}, () => {
      setTimeout(() => {this.setState({error: ''})}, 3000);
    })
  };

  submitHandler = e => {
    e.preventDefault();
    const {userEmail, userPassword} = this.state;
    if(validateLoginForm(userEmail, userPassword, this.setError)){
      this.props.login(userEmail, userPassword)
        .then(({error}) => {
          if(!error){
            this.props.history.push('/');
          } else {
            this.setState({
              error: error,
            }, () => {
              setTimeout(() => {this.setState({error: ''})}, 3000);
            })
          }
        });
    }
  };

  componentDidMount() {
    if(isLogin()){
      this.props.history.push('/income');
    }
  }

  render() {
    const {userEmail, userPassword, error, loading} = this.state;
    return (
      <Container>
        <Row className='login-form'>
          <Col sm="12" md={{size: 6, offset: 3}}>
            <Form
              onSubmit={this.submitHandler}
            >
              <br/>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="userEmail"
                  value={userEmail}
                  placeholder="john@mail.com"
                  onChange={this.inputChangeHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Password</Label>
                <Input
                  type="password"
                  name="userPassword"
                  value={userPassword}
                  placeholder="Password"
                  onChange={this.inputChangeHandler}
                />
              </FormGroup>
              {this.state.error &&
              <Alert color="danger" isOpen={true} fade={false}>
                {this.state.error}
              </Alert>
              }
              <Button type="submit" disabled={loading} block={true}>
                {loading ? 'Loading...' : 'Sign In'}
              </Button>
              <br/>
              {error && <Alert color="danger">{error}</Alert>}
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const  mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(null, mapDispatchToProps)(withRouter(Login));