import React, {Component, Fragment}                         from 'react';
import {Badge, Box, Col, Content, Row, SimpleTable, }       from 'adminlte-2-react';
import Select                                               from 'react-select';
import DatePicker                                           from 'react-datepicker';
import {Button, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import ReactPaginate from 'react-paginate';

class WithdrawalTable extends Component {
  state = {
    id: '',
    requisite: '',
    payment_system: '',
    sum: '',
    username: '',
    createdFrom: '',
    createdUntil: '',
  };

  selectChangeHandler = payment_system => {
    this.setState({payment_system: payment_system}, this.getTableData)
  };

  datePickerChangeHandler = (value, name) => {
    this.setState({[name]: value}, this.getTableData)
  };

  searchChange = e => {
    this.setState({[e.target.name]: e.target.value}, this.getTableData);
  };

  getTableData = () => {
    console.log(this.state);
  };

  getIdTitle = () => {
    return <div className="table-th-with-search id">
      <p>№</p>
      <input type="text" name="id" value={this.state.id} onChange={this.searchChange}/>
    </div>;
  };

  getUsernameTitle = () => {
    return <div className="table-th-with-search">
      <p>Username</p>
      <input type="text" name="username" value={this.state.username} onChange={this.searchChange}/>
    </div>;
  };

  renderUser = (data) => {
    return <a href="#" className="table-user">{data}</a>
  };

  getPaymentSystemTitle = () => {
    const selectOptions = [
      {value: 'payment1', label: 'One'},
      {value: 'payment2', label: 'Two'},
    ];
    return <div className="table-th-with-search">
      <p>Система пополнений</p>
      <Select options={selectOptions}
              value={this.state.payment_system}
              onChange={this.selectChangeHandler}
      />
    </div>;
  };

  getSumTitle = () => {
    return <div className="table-th-with-search">
      <p>Сумма/ Сумма с процентами</p>
      <input type="text" name="sum" value={this.state.sum} onChange={this.searchChange}/>
    </div>;
  };

  renderSum = (data, rowInfo) => {
    return <div>
      <p className="text-red">{rowInfo.sum}</p>
      <p className="text-green ">{rowInfo.sum_final}</p>
      <p className="text-yellow ">{rowInfo.percent}</p>
    </div>
  };

  getRequisiteTitle = () => {
    return <div className="table-th-with-search">
      <p>Requisite</p>
      <input type="requisite" name="requisite" value={this.state.requisite} onChange={this.searchChange}/>
    </div>;
  };

  renderRequisite = (requisite) => {
    return <div>
      <p className="requisite-number">{requisite}</p>
      {/*<p className="text-blue" style={{maxWidth: '200px'}}>*/}
        {/*Public-key:*/}
        {/*<br/>*/}
        {/*{key}*/}
      {/*</p>*/}
    </div>
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

  renderBalance = (data, rowInfo) => {
    return [
      <p className="text-red">{rowInfo.sum_from}</p>,
      <p className="text-green ">{rowInfo.sum_to}</p>,
    ]
  };

  renderIp = (data, rowInfo) => {
    return <div>
      <span>{rowInfo.ip_creator}</span>
      <p>Verify: {rowInfo.verification ?
        <Badge color="green" text={'Yes'}/> :
        <Badge color="red" text={'No'}/>}</p>
    </div>
  };

  primaryButtonHandler = data => {
    console.log(data);
  };

  successButtonHandler = data => {
    console.log(data);
  };

  infoButtonHandler = data => {
    console.log(data);
  };

  renderButtons = (data, rowData) => {
    return <div>
      <Button color={'primary'}
              style={{marginBottom: '5px'}}
              onClick={()=> {this.primaryButtonHandler(rowData)}}
      ><i className="fa fa-fw fa-check"/></Button>
      <Button color={'success'}
              style={{marginBottom: '5px'}}
              onClick={()=> {this.successButtonHandler(rowData)}}
      ><i className="fa fa-fw fa-arrow-right"/></Button>
      <Button color={'info'}
              onClick={()=> {this.infoButtonHandler(rowData)}}
      ><i className="fa fa-fw fa-undo"/></Button>
    </div>
  };

  render() {
    const columns = [
      {title: this.getIdTitle(), data: 'id', width: '100px'},
      {title: this.getUsernameTitle(), data: 'user', render: this.renderUser, width: '220px'},
      {title: this.getPaymentSystemTitle(), data: 'coin', width: '220px'},
      {title: this.getSumTitle(), data: 'sum', render: this.renderSum, width: '220px'},
      {title: this.getRequisiteTitle(), data: 'requisite', render: this.renderRequisite, width: '200px'},
      {title: 'Balance', data: 'sum_from', render: this.renderBalance},
      {title: 'Ip/Verification', data: 'ip_creator', render: this.renderIp},
      {title: this.getCreatedTitle(), data: 'created'},
      {title: 'Действия', data: 'buttons', render: this.renderButtons},
    ];

    const {data, pagination, onPageChange} = this.props;

    return (
      <Fragment>
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
        { pagination.last_page !== 1 &&
          <Row>
            <Col lg={12}>
              <ReactPaginate pageCount={pagination.last_page}
                             pageRangeDisplayed={3}
                             marginPagesDisplayed={2}
                             initialPage={pagination.current_page - 1}
                             onPageChange={onPageChange}
                             containerClassName={'pagination'}
                             subContainerClassName={'pages pagination'}
                             activeClassName={'active'}
                             previousLabel={'<'}
                             nextLabel={'>'}
              />
            </Col>
          </Row>
        }

      </Fragment>
    );
  }
}

export default WithdrawalTable;