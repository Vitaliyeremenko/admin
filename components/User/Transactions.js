import React                                                from 'react';
import {Badge, Box, Button, Col, Content, Row, SimpleTable} from 'adminlte-2-react';
import PropTypes                                            from 'prop-types';

const TRANSACTION_TYPES = {
  INCOME: 1,
  BUY: 2,
  WITHDRAW: 3,
  SELL: 4,
};

const REQUISITE_TYPES = {
  USER: 1,
  NUMBER: 2,
};

const TRANSACTION_STATUSES = {
  NEED_CONFIRM: 1,
  WAIT: 2,
  DONE: 3,
  CANCELED: 4,
};

const Transactions = ({transactions}) => {

  transactions = [
    {
      id: 1,
      type: TRANSACTION_TYPES.INCOME,
      sum: 234,
      change: {before: '123123112 PZM', after: '1231231 PZM'},
      requisite: {type: REQUISITE_TYPES.USER, value: 'user-1231231'},
      status: TRANSACTION_STATUSES.NEED_CONFIRM,
      date: '13:13:13 39',
    },

    {
      id: 1,
      type: TRANSACTION_TYPES.BUY,
      sum: 234,
      change: {before: '123123112 PZM', after: '1231231 PZM'},
      requisite: {type: REQUISITE_TYPES.NUMBER, value: '1231-fsasa-hgfd-rees'},
      status: TRANSACTION_STATUSES.WAIT,
      date: '13:13:13 39',
    },

    {
      id: 1,
      type: TRANSACTION_TYPES.SELL,
      sum: 234,
      change: {before: '123123112 PZM', after: '1231231 PZM'},
      requisite: {type: REQUISITE_TYPES.USER, value: 'user-1231231'},
      status: TRANSACTION_STATUSES.DONE,
      date: '13:13:13 39',
    },

    {
      id: 1,
      type: TRANSACTION_TYPES.WITHDRAW,
      sum: 234,
      change: {before: '123123112 PZM', after: '1231231 PZM'},
      requisite: {type: REQUISITE_TYPES.NUMBER, value: '12312-fsda-fsad-fsad'},
      status: TRANSACTION_STATUSES.CANCELED,
      date: '13:13:13 39',
    },
  ];

  function renderType(data) {
    switch (data) {
      case TRANSACTION_TYPES.WITHDRAW:
        return <div>
          <i className="fa fa-long-arrow-down text-red"/> WITHDRAW
        </div>;
      case TRANSACTION_TYPES.SELL:
        return <div>
          <i className="fa fa-minus text-red"/> SELL
        </div>;
      case TRANSACTION_TYPES.BUY:
        return <div>
          <i className="fa fa-plus text-green"/> BUY
        </div>;
      case TRANSACTION_TYPES.INCOME:
        return <div>
          <i className="fa fa-long-arrow-up text-green"/> INCOME
        </div>;
    }
  }

  function renderSum(data, rowInfo) {
    if (rowInfo.type === TRANSACTION_TYPES.WITHDRAW || rowInfo.type === TRANSACTION_TYPES.SELL) {
      return <Badge color="green" text={data}/>;
    } else {
      return <Badge color="red" text={data}/>;
    }
  }

  function renderChange(data) {
    return [
      <p className="text-red">{data.before}</p>,
      <p className="text-green ">{data.after}</p>,
    ]
  }

  function renderRequisite(data) {
    if (data.type === REQUISITE_TYPES.NUMBER) {
      return data.value;
    } else if (data.type === REQUISITE_TYPES.USER) {
      return <a href="#" className="table-user">{data.value}</a>
    }
  }

  function renderStatus(data, {status}) {
    switch (status) {
      case TRANSACTION_STATUSES.NEED_CONFIRM:
        return <Badge color="blue" text={'NEED_CONFIRM'}/>;
      case TRANSACTION_STATUSES.WAIT:
        return <Badge color="aqua" text={'WAIT'}/>;
      case TRANSACTION_STATUSES.DONE:
        return <Badge color="green" text={'DONE'}/>;
      case TRANSACTION_STATUSES.CANCELED:
        return <Badge color="red" text={'CANCELED'}/>;
    }
  }

  function renderDate(data, {date}) {
    return date;
  }
  const columns = [
    {title: 'id', data: 'id'},
    {title: 'type', data: 'type', render: renderType},
    {title: 'Sum', data: 'sum', render: renderSum},
    {title: 'change', data: 'change', render: renderChange},
    {title: 'requisite', data: 'requisite', render: renderRequisite},
    {title: 'status', type: 'status', render: renderStatus},
    {title: 'date', type: 'date', render: renderDate},
  ];

  return (
    <SimpleTable
      responsive={true}
      columns={columns}
      data={transactions}
      className="table balances"
    />
  );
};


Transactions.propTypes = {
  transactions: PropTypes.array,
};

export default Transactions;