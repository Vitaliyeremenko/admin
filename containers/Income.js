import React, {Component}                                   from 'react';
import {Badge, Box, Button, Col, Content, Row, SimpleTable} from 'adminlte-2-react';
import DatePicker                                           from 'react-datepicker';
import Select                                               from 'react-select';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';


class Income extends Component {
  state = {
    id: '',
    requisite: '',
    sum: '',
    username: '',
    createdFrom: '',
    createdUntil: '',
    currency: '',
  };

  renderBalance = (data) => {
    return [
      <p className="text-red">{data.last}</p>,
      <p className="text-green ">{data.now}</p>,
    ]
  };

  renderUser = (data) => {
    return <a href="#" className="table-user">{data}</a>
  };

  renderSum = (data) => {
    return <Badge color="green" text={data}/>
  };

  getIdTitle = () => {
    return <div className="table-th-with-search id">
      <p>ID</p>
      <input type="text" name="id" value={this.state.id} onChange={this.searchChange}/>
    </div>;
  };

  getSumTitle = () => {
    return <div className="table-th-with-search">
      <p>Sum</p>
      <input type="text" name="sum" value={this.state.sum} onChange={this.searchChange}/>
    </div>;
  };

  getRequisiteTitle = () => {
    return <div className="table-th-with-search">
      <p>Requisite</p>
      <input type="requisite" name="requisite" value={this.state.requisite} onChange={this.searchChange}/>
    </div>;
  };

  getUsernameTitle = () => {
    return <div className="table-th-with-search">
      <p>Username</p>
      <input type="text" name="username" value={this.state.username} onChange={this.searchChange}/>
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

  searchChange = e => {
    this.setState({[e.target.name]: e.target.value}, this.getTableData);
  };

  selectChangeHandler = currency => {
    this.setState({currency: currency}, this.getTableData)
  };

  datePickerChangeHandler = (value, name) => {
    this.setState({[name]: value}, this.getTableData)
  };

  getTableData = () => {
    console.log(this.state);
  };

  render() {
    const selectOptions = [
      {value: 'one', label: 'One'},
      {value: 'two', label: 'Two'},
    ];
    const columns = [
      {title: this.getIdTitle(), data: 'id', width: '100px'},
      {title: this.getUsernameTitle(), data: 'username', render: this.renderUser, width: '220px'},
      {title: this.getSumTitle(), data: 'sum', render: this.renderSum, width: '220px'},
      {title: this.getRequisiteTitle(), data: 'requisite', width: '300px'},
      {title: 'Balance', data: 'balance', render: this.renderBalance},
      {title: this.getCreatedTitle(), data: 'created'},
    ];

    const data = [
      {
        id: 132133,
        username: 'Colian',
        sum: '123 PMZ',
        requisite: '123123123123123',
        balance: {last: '0.123123', now: '-123123,21'},
        created: '12.04.4281 df',
      },
      {
        id: 132133,
        username: 'Colian',
        sum: '123 PMZ',
        requisite: '123123123123123',
        balance: {last: '0.123123', now: '-123123,21'},
        created: '12.04.4281 df',
      },
      {
        id: 132133,
        username: 'Colian',
        sum: '123 PMZ',
        requisite: '123123123123123',
        balance: {last: '0.123123', now: '-123123,21'},
        created: '12.04.4281 df',
      },
      {
        id: 132133,
        username: 'Colian',
        sum: '123 PMZ',
        requisite: '123123123123123',
        balance: {last: '0.123123', now: '-123123,21'},
        created: '12.04.4281 df',
      },
    ];

    return (
      <Content title="Ввод" browserTitle="Ввод">
        <Row>
          <Col lg={3} style={{marginBottom: '15px'}}>
            <Select options={selectOptions}
                    value={this.state.currency}
                    onChange={this.selectChangeHandler}
            />
          </Col>
        </Row>
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

export default Income;