import React                                                from 'react';
import {Badge, Box, Button, Col, Content, Row, SimpleTable} from 'adminlte-2-react';
import PropTypes                                            from 'prop-types';

import '../../styles/User/Balances.sass';

const Balances = ({balances}) => {
  balances = [
    {
      currency: 'Rub',
      wallet: '0',
      hold: '0.32',
      status: 0,
    },
    {
      currency: 'FRS',
      wallet: '0',
      hold: '0.32',
      status: 1,
    },
    {
      currency: 'FSE',
      wallet: '0',
      hold: '0.32',
      status: 0,
    },
    {
      currency: 'NYT',
      wallet: '0',
      hold: '0.32',
      status: 1,
    },
  ];

  const renderUndef = data => {
    return <div>
      <i className="fa fa-plus text-aqua"/>
    </div>
  };

  const renderStatus = data => {
    switch (data) {
      case 0:
        return <p className="text-danger">false</p>;
      case 1:
        return <p className="text-aqua">true</p>;
      default:
        return null
    }
  };

  const renderButtons = (data, rowData) => {
    return <div className="balances-buttons">
      <i className="fa fa-arrows-v text-aqua"/>
      <i className="fa fa-trash text-danger"/>
    </div>
  };

  const columns = [
    {title: 'Currency', data: 'currency'},
    {title: 'Wallet', data: 'wallet'},
    {title: 'Hold', data: 'hold'},
    {title: 'undef', data: 'undef', render: renderUndef},
    {title: 'Status', data: 'status', render: renderStatus},
    {title: '', type: null, render: renderButtons},
  ];
  return (
    <SimpleTable
      responsive={true}
      columns={columns}
      data={balances}
      className="table balances"
    />
  );
};

Balances.propTypes = {
  balances: PropTypes.array,
};

export default Balances;