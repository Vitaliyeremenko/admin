import React, {Component}                                   from 'react';
import {Badge, Box, Button, Col, Content, Row, SimpleTable} from 'adminlte-2-react';
import DatePicker                                           from 'react-datepicker';
import {Pagination, PaginationItem, PaginationLink}         from 'reactstrap';


class Users extends Component {
  state = {
    id: '',
    email: '',
    referral: '',
    username: '',
    createdFrom: '',
    createdUntil: '',
    activation: '',
    ip: ''
  };

  getIdTitle = () => {
    return <div className="table-th-with-search id">
      <p>ID</p>
      <input type="text" name="id" value={this.state.id} onChange={this.searchChange}/>
    </div>;
  };

  getUsernameTitle = () => {
    return <div className="table-th-with-search">
      <p>Username</p>
      <input type="text" name="username" value={this.state.username} onChange={this.searchChange}/>
    </div>;
  };

  getEmailTitle = () => {
    return <div className="table-th-with-search">
      <p>Email</p>
      <input type="text" name="email" value={this.state.email} onChange={this.searchChange}/>
    </div>;
  };

  getReferralTitle = () => {
    return <div className="table-th-with-search">
      <p>Referral</p>
      <input type="text" name="referral" value={this.state.referral} onChange={this.searchChange}/>
    </div>;
  };

  getIpTitle = () => {
    return <div className="table-th-with-search">
      <p>Ip</p>
      <input type="text" name="ip" value={this.state.ip} onChange={this.searchChange}/>
    </div>;
  };

  getCreatedTitle = () => {
    return <div className="table-th-with-search">
      <p>Created</p>
      <div className="table-dates">
        <DatePicker
          selected={this.state.createdFrom}
          onChange={data => {this.datePickerChangeHandler(data, 'createdFrom')}}
        />
        <DatePicker
          selected={this.state.createdUntil}
          onChange={data => {this.datePickerChangeHandler(data, 'createdUntil')}}
          popperPlacement={'bottom-start'}
        />
      </div>
    </div>;
  };

  renderUser = (data) => {
    return <a href="#" className="table-user">{data}</a>
  };

  renderActivation = data => {
    switch (data) {
      case 0:
        return <Badge color={'red'} text={'Не активирован'}/>
      case 1:
        return <Badge color={'green'} text={'Активирован'}/>
    }
  };

  renderBlocked = data => {
    switch (data) {
      case 0:
        return <Badge color={'red'} text={'Не заблокирован'}/>;
      case 1:
        return <Badge color={'green'} text={'Заблокирован'}/>;
    }
  };

  searchChange = e => {
    this.setState({[e.target.name]: e.target.value}, this.getTableData);
  };

  getTableData = () => {
    console.log(this.state);
  };

  datePickerChangeHandler = (value, name) => {
    this.setState({[name]: value}, this.getTableData)
  };

  render() {
    const columns = [
      {title: this.getIdTitle(), data: 'id', width: '100px'},
      {title: this.getUsernameTitle(), data: 'username', render: this.renderUser, width: '220px'},
      {title: this.getEmailTitle(), data: 'email', width: '220px'},
      {title: this.getReferralTitle(), data: 'referral', width: '300px'},
      {title: 'Activation', data: 'activation', render: this.renderActivation},
      {title: 'Блокировка', data: 'blocked', render: this.renderBlocked},
      {title: this.getIpTitle(), data: 'ip',},
      {title: this.getCreatedTitle(), data: 'created'},
    ];

    const data = [{
      id: 1,
      email: 'mail@.com',
      referral: 1,
      username: 'Oleg',
      created: '12.04.412 12:22',
      activation: 1,
      blocked: 1,
      ip: '192.1.1.1'
    },{
      id: 1,
      email: 'mail@.com',
      referral: 1,
      username: 'Oleg',
      created: '12.04.412 12:22',
      activation: 0,
      blocked: 1,
      ip: '192.1.1.1'
    },{
      id: 1,
      email: 'mail@.com',
      referral: 1,
      username: 'Oleg',
      created: '12.04.412 12:22',
      activation: 0,
      blocked: 0,
      ip: '192.1.1.1'
    },{
      id: 1,
      email: 'mail@.com',
      referral: 1,
      username: 'Oleg',
      created: '12.04.412 12:22',
      activation: 1,
      blocked: 0,
      ip: '192.1.1.1'
    },{
      id: 1,
      email: 'mail@.com',
      referral: 1,
      username: 'Oleg',
      created: '12.04.412 12:22',
      activation: 1,
      blocked: 1,
      ip: '192.1.1.1'
    },];
    return (
      <Content title="Пользователи" browserTitle="Пользовтели">
        <Row>
          <Col lg={12}>
            <SimpleTable
              responsive={true}
              columns={columns}
              data={data}
              className="table"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Pagination aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#" />
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Users;