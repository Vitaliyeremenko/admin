import React                                                from 'react';
import PropTypes                                            from 'prop-types';
import {SimpleTable} from 'adminlte-2-react';

const Referrals = ({referrals}) => {
  referrals = [
    {username: 'username', level: 1, profit: 0.432},
    {username: 'username', level: 1, profit: 0.432},
    {username: 'username', level: 1, profit: 0.432},
    {username: 'username', level: 1, profit: 0.432},
    {username: 'username', level: 1, profit: 0.432},
  ];
  const renderUser = (data) => {
    return <a href="#" className="table-user">{data}</a>
  };

  const columns = [
    {title: 'Username', data: 'username', render: renderUser},
    {title: 'Level', data: 'level'},
    {title: 'Profit', data: 'profit'},
  ];

  return (
    <SimpleTable
      responsive={true}
      columns={columns}
      data={referrals}
      className="table"
    />
  );
};

Referrals.propTypes = {
  referrals: PropTypes.array,
};

export default Referrals;