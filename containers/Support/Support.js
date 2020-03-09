import React, {Component}                                   from 'react';
import {Badge, Box, Col, Content, Row, SimpleTable}         from 'adminlte-2-react';
import {Button, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import Select                                               from 'react-select';

import '../../styles/Support.sass';

const ANSWERS = {
  OPERATOR: 1,
  USER: 2,
};

const STATUSES = {
  OLD: 0,
  NEW: 1,
};


class Support extends Component {
  state = {
    id: '',
    username: '',
    last_message: '',
    answer: '',
  };

  getIdTitle = () => {
    return <div className="table-th-with-search id">
      <p>#</p>
      <input type="text"
             name="id"
             value={this.state.id}
             onChange={this.searchChange}
      />
    </div>;
  };

  getUsernameTitle = () => {
    return <div className="table-th-with-search">
      <p>Username</p>
      <input type="text"
             name="username"
             value={this.state.username}
             onChange={this.searchChange}
      />
    </div>;
  };

  renderUser = (data) => {
    return <a href="#" className="table-user">{data}</a>
  };

  getLastMessageTitle = () => {
    return <div className="table-th-with-search">
      <p>Last message</p>
      <input type="text"
             name="last_message"
             value={this.state.last_message}
             onChange={this.searchChange}
      />
    </div>;
  };

  renderLastMessage = (data, rowInfo) => {
    if (data.length > 50) {
      data = data.substring(0, 50) + '...';
    }
    return <p className={rowInfo.status === STATUSES.NEW ? 'text-aqua' : ''}>{data}</p>;
  };

  getAnswerTitle = () => {
    const selectOptions = [
      {value: 'one', label: 'One'},
      {value: 'two', label: 'Two'},
    ];
    return <div className="table-th-with-search id">
      <p>Answer</p>
      <Select options={selectOptions}
              value={this.state.answer}
              onChange={this.selectChangeHandler}
      />
    </div>;
  };

  renderAnswer = data => {
    switch (data) {
      case ANSWERS.OPERATOR:
        return <Button color="warning">Operator</Button>
      case ANSWERS.USER:
        return <Button color="success">User</Button>
    }
  };

  selectChangeHandler = answer => {
    this.setState({answer: answer}, this.getTableData)
  };

  renderButtons = (data, rowData) => {
    return <div className="support-buttons">
      <i className="fa fa-ban text-aqua"/>
      <i className="fa fa-eye text-aqua" />
      <i className="fa fa-trash text-aqua"/>
    </div>
  };

  searchChange = e => {
    this.setState({[e.target.name]: e.target.value}, this.getTableData);
  };

  getTableData = () => {
    console.log(this.state);
  };

  getSupportColumns = () => {
    return [
      {title: this.getIdTitle(), data: 'id'},
      {title: this.getUsernameTitle(), data: 'username', render: this.renderUser, width: '220px'},
      {title: this.getLastMessageTitle(), data: 'last_message', render: this.renderLastMessage},
      {title: this.getAnswerTitle(), data: 'answer', render: this.renderAnswer},
      {title: 'Обновлен', data: 'updated'},
      {title: 'Создан', data: 'created'},
      {title: '', data: null, render: this.renderButtons},
    ];
  };

  render() {
    const data = [
      {
        id: '42523345',
        username: 'Anatoliy Oispocich',
        last_message: 'Hr ewkh gweor wergoijwerilngpwie rnwejf gwoiern gwleour jgweoril gwrekj gnbw;eur ilgknwekj rkgnwjkergnjwker knfg,wkjer g,w',
        answer: 1,
        updated: '12.12.1212 12:12',
        created: '12.12.1212 12:12',
        status: STATUSES.NEW,
      },
      {
        id: '42523345',
        username: 'Anatoliy Oispocich',
        last_message: 'Hr ewkh gweor wergoijwerilngpwie rnwejf gwoiern gwleour jgweoril gwrekj gnbw;eur ilgknwekj rkgnwjkergnjwker knfg,wkjer g,w',
        answer: 2,
        updated: '12.12.1212 12:12',
        created: '12.12.1212 12:12',
        status: STATUSES.OLD,
      },
      {
        id: '42523345',
        username: 'Anatoliy Oispocich',
        last_message: 'Hr ewkh gweor wergoijwerilngpwie rnwejf gwoiern gwleour jgweoril gwrekj gnbw;eur ilgknwekj rkgnwjkergnjwker knfg,wkjer g,w',
        answer: 1,
        updated: '12.12.1212 12:12',
        created: '12.12.1212 12:12',
        status: STATUSES.OLD,
      },
      {
        id: '42523345',
        username: 'Anatoliy Oispocich',
        last_message: 'Hr ewkh gweor wergoijwerilngpwie rnwejf gwoiern gwleour jgweoril gwrekj gnbw;eur ilgknwekj rkgnwjkergnjwker knfg,wkjer g,w',
        answer: 1,
        updated: '12.12.1212 12:12',
        created: '12.12.1212 12:12',
        status: STATUSES.OLD,
      },
    ];
    return (
      <Content title="Поддрежка" browserTitle="Поддержка">
        <Row>
          <Col lg={12}>
            <Button color="primary">Написать</Button>{' '}
            <Button color="primary">Быстрые ответы</Button>
          </Col>
        </Row>
        <Row className={'support'}>
          <Col lg={12}>
            <SimpleTable
              responsive={true}
              columns={this.getSupportColumns()}
              data={data}
              className="table support"
              striped={true}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Pagination aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink first href="#"/>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous href="#"/>
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
                <PaginationLink next href="#"/>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#"/>
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Support;