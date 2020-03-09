import React         from 'react';
import PropTypes     from 'prop-types';
import {Badge, Box, Button, Col, Content, Row, SimpleTable} from 'adminlte-2-react';

const Operations = ({operations}) => {

  operations = [
    {
      username_start: 'axle324',
      username_end: 'boeis332',
      sum: [
        {currency: 'Rub', value: '1731.123'},
        {currency: 'PZM', value: '120'},
      ],
      balance: {before: 0, after: 150},
      link: '123123jr2ongrekp',
      type: 'sell',
      active: 'Finish',
      id: '2019-08-123: 12:41:23'
    },
    {
      username_start: 'axle324',
      username_end: 'boeis332',
      sum: [
        {currency: 'Rub', value: '1731.123'},
        {currency: 'PZM', value: '120'},
      ],
      balance: {before: 0, after: 150},
      link: '123123jr2ongrekp',
      type: 'sell',
      active: 'Finish',
      id: '2019-08-123: 12:41:23'
    },
    {
      username_start: 'axle324',
      username_end: 'boeis332',
      sum: [
        {currency: 'Rub', value: '1731.123'},
        {currency: 'PZM', value: '120'},
      ],
      balance: {before: 0, after: 150},
      link: '123123jr2ongrekp',
      type: 'sell',
      active: 'Finish',
      id: '2019-08-123: 12:41:23'
    },
    {
      username_start: 'axle324',
      username_end: 'boeis332',
      sum: [
        {currency: 'Rub', value: '1731.123'},
        {currency: 'PZM', value: '120'},
      ],
      balance: {before: 0, after: 150},
      link: '123123jr2ongrekp',
      type: 'sell',
      active: 'Finish',
      id: '2019-08-123: 12:41:23'
    },
    {
      username_start: 'axle324',
      username_end: 'boeis332',
      sum: [
        {currency: 'Rub', value: '1731.123'},
        {currency: 'PZM', value: '120'},
      ],
      balance: {before: 0, after: 150},
      link: '123123jr2ongrekp',
      type: 'sell',
      active: 'Finish',
      id: '2019-08-123: 12:41:23'
    },
  ];

  const renderUser = (data) => {
    return <a href="#" className="table-user">{data}</a>
  };

  const renderSum = (data) => {
    return data.map(({currency, value}) => <p>{`${value} ${currency}`}</p>)
  };

  const renderBalance = ({before, after}) => {
    return [
      <p>{before}</p>,
      <Badge color="green" text={after}/>
    ]
  };

  const columns = [
    {title: 'Username start', data: 'username_start', render: renderUser, },
    {title: 'Username end', data: 'username_end', render: renderUser, },
    {title: 'Sum', data: 'sum', render: renderSum,},
    {title: 'Balance', data: 'balance', render: renderBalance, },
    {title: 'Link', data: 'link'},
    {title: 'Type', data: 'type'},
    {title: 'Active', data: 'active'},
    {title: 'Id', data: 'id'},
  ];

  return (
    <SimpleTable
      responsive={true}
      columns={columns}
      data={operations}
      className="table"
    />
  );
};

Operations.propTypes = {
  operations: PropTypes.array,
};

export default Operations;