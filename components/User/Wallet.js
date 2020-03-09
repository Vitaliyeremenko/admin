import React                                                from 'react';
import {Badge, Box, Button, Col, Content, Row, SimpleTable} from 'adminlte-2-react';
import PropTypes                                            from 'prop-types';

import '../../styles/User/Wallet.sass';

const Wallets = ({wallets}) => {
  wallets = [
    {
      currency: 'Rub',
      wallet: '0',
      site: 'https://www.google.com/',
      status: 0,
    },
    {
      currency: 'FRS',
      wallet: '0',
      site: 'https://www.google.com/',
      status: 1,
    },
    {
      currency: 'FSE',
      wallet: '0',
      site: 'https://www.google.com/',
      status: 0,
    },
    {
      currency: 'NYT',
      wallet: '0',
      site: 'https://www.google.com/',
      status: 1,
    },
  ];

  const renderSite = data => {
    return <div>
      <a href={data} target="_blank">{data}</a>
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
    return <div className="wallets-buttons">
      <i className="fa fa-arrows-v text-aqua"/>
      <i className="fa fa-trash text-danger"/>
    </div>
  };

  const columns = [
    {title: 'Currency', data: 'currency'},
    {title: 'Wallet', data: 'wallet'},
    {title: 'Site', data: 'site', render: renderSite},
    {title: 'Status', data: 'status', render: renderStatus},
    {title: '', type: null, render: renderButtons},
  ];
  return (
    <SimpleTable
      responsive={true}
      columns={columns}
      data={wallets}
      className="table wallets"
    />
  );
};

Wallets.propTypes = {
  wallets: PropTypes.array,
};

export default Wallets;