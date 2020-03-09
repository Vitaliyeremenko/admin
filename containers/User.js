import React, {Component}                                   from 'react';
import {Badge, Box, Button, Col, Content, Row, SimpleTable} from 'adminlte-2-react';
import {Alert, Nav, NavItem, NavLink, TabContent, TabPane}  from 'reactstrap';
import Currencies   from '../components/User/Currencies';
import BasicInfo    from '../components/User/BasicInfo';
import Operations   from '../components/User/Operations';
import Referrals    from '../components/User/Referrals';
import Balances     from '../components/User/Balances';
import Wallets      from '../components/User/Wallet';
import Transactions from '../components/User/Transactions';

class User extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      isBlocked: true,
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <Content title="Пользователь" browserTitle="Пользователь">
        <Row>
          <Col lg={12}>
            <Box>
              <Currencies/>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            {this.state.isBlocked &&
            <Alert color="danger" isOpen={true} fade={false}>
              Comment why user is blocked!
            </Alert>
            }
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Box>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={this.state.activeTab === '1' ? 'active' : ''}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Basic info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.activeTab === '2' ? 'active' : ''}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Operations
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.activeTab === '3' ? 'active' : ''}
                    onClick={() => { this.toggle('3'); }}
                  >
                    Transactions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.activeTab === '4' ? 'active' : ''}
                    onClick={() => { this.toggle('4'); }}
                  >
                    Referrals
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.activeTab === '5' ? 'active' : ''}
                    onClick={() => { this.toggle('5'); }}
                  >
                    Balances
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.activeTab === '6' ? 'active' : ''}
                    onClick={() => { this.toggle('6'); }}
                  >
                    Wallets
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <BasicInfo/>
                </TabPane>
                <TabPane tabId="2">
                  <Operations/>
                </TabPane>
                <TabPane tabId="3">
                  <Transactions/>
                </TabPane>
                <TabPane tabId="4">
                  <Referrals/>
                </TabPane>
                <TabPane tabId="5">
                  <Balances/>
                </TabPane>
                <TabPane tabId="6">
                  <Wallets/>
                </TabPane>
              </TabContent>
            </Box>
          </Col>
        </Row>

      </Content>
    );
  }
}

export default User;