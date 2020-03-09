import React, {Component}                                   from 'react';
import {Pagination, PaginationItem, PaginationLink, Button} from 'reactstrap';
import {Badge, Box , Col, Content, Row, SimpleTable}        from 'adminlte-2-react';
import {getDispute}                                         from '../store/actions/operation.actions';
import {connect}                                              from 'react-redux';

class DisputeActive extends Component {
  state = {
    username: '',
    respondent: '',
    sum: '',
    href: '',
  };

  renderHref = (data) => {
    return <a href="#" className="table-user">{data}</a>
  };

  getHrefTitle = () => {
    return <div className="table-th-with-search">
      <p>Link</p>
      <input type="text" name="href" value={this.state.href} onChange={this.searchChange}/>
    </div>;
  };

  renderUser = (data) => {
    return <a href="#" className="table-user">{data}</a>
  };

  getUsernameTitle = () => {
    return <div className="table-th-with-search">
      <p>Username</p>
      <input type="text" name="username" value={this.state.username} onChange={this.searchChange}/>
    </div>;
  };

  renderRespondent = (data) => {
    return <a href="#" className="table-user">{data}</a>
  };

  getRespondentTitle = () => {
    return <div className="table-th-with-search">
      <p>Respondent</p>
      <input type="text" name="respondent" value={this.state.respondent} onChange={this.searchChange}/>
    </div>;
  };

  getSumTitle = () => {
    return <div className="table-th-with-search">
      <p>Sum</p>
      <input type="text" name="sum" value={this.state.sum} onChange={this.searchChange}/>
    </div>;
  };

  renderSum = (data) => {
    return <Badge color="green" text={data}/>
  };

  searchChange = e => {
    this.setState({[e.target.name]: e.target.value}, this.getTableData);
  };

  renderChange = ({from, to}) => {
    return <div>{from}->{to}</div>
  };

  renderButton = (data, rowData) => {
    return <a href="">
      <Button outline color="danger">Спор</Button>
    </a>
  };

  componentDidMount() {
    this.props.getDispute();
  }


  render() {
    const columns = [
      {title: this.getUsernameTitle(), data: 'username', render: this.renderUser, width: '220px'},
      {title: this.getRespondentTitle(), data: 'respondent', render: this.renderRespondent, width: '220px'},
      {title: this.getSumTitle(), data: 'sum', render: this.renderSum, width: '220px'},
      {title: this.getHrefTitle(), data: 'href', render: this.renderHref, width: '220px'},
      {title: 'Валюта монета', data: 'change', render: this.renderChange},
      {title: 'Тип сделки', data: 'type'},
      {title: 'Статус', data: 'status'},
      {title: 'Открыт в', data: 'opened'},
      {title: '', data: null, render: this.renderButton}
    ];

    const data = [
      {
        username: 'Jorik',
        respondent: 'Nikitka',
        sum: '123',
        href: 'https://trello.com/c/3nWPl6ct/19-imagepng',
        change: {from: 'AAA', to: 'BBB'},
        type: 'sell',
        status: 'Lorem',
        opened: '17.12.16 21:33',
      },
      {
        username: 'Jorik',
        respondent: 'Nikitka',
        sum: '123',
        href: 'https://trello.com/c/3nWPl6ct/19-imagepng',
        change: {from: 'AAA', to: 'BBB'},
        type: 'sell',
        status: 'Lorem',
        opened: '17.12.16 21:33',
      },
      {
        username: 'Jorik',
        respondent: 'Nikitka',
        sum: '123',
        href: 'https://trello.com/c/3nWPl6ct/19-imagepng',
        change: {from: 'AAA', to: 'BBB'},
        type: 'sell',
        status: 'Lorem',
        opened: '17.12.16 21:33',
      },
      {
        username: 'Jorik',
        respondent: 'Nikitka',
        sum: '123',
        href: 'https://trello.com/c/3nWPl6ct/19-imagepng',
        change: {from: 'AAA', to: 'BBB'},
        type: 'sell',
        status: 'Lorem',
        opened: '17.12.16 21:33',
      },
    ];

    return (
      <Content title="Ввод" browserTitle="Ввод">
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

const mapDispatchToProps = () => dispatch => ({
  getDispute: () => dispatch(getDispute())
});

export default connect(null, mapDispatchToProps)(DisputeActive);