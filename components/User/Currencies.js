import React from 'react';
import propTypes from 'prop-types';

import '../../styles/User/Currencies.sass';

const demoList = [
  {name: 'RUB', value: '111'},
  {name: 'RUB', value: '111'},
  {name: 'RUB', value: '111'},
  {name: 'RUB', value: '111'},
  {name: 'RUB', value: '111'},
  {name: 'RUB', value: '111'},
  {name: 'RUB', value: '111'},
  {name: 'RUB', value: '111'},
  {name: 'RUB', value: '111'},
  {name: 'RUB', value: '111'},
  {name: 'RUB', value: '111'},
  {name: 'RUB', value: '111'},
  {name: 'RUB', value: '111'},
];

const Currencies = ({list}) => {
  list = demoList;
  return (
    <div className="currency-list">
      {list.map(({name, value}) => {
        return <div className="currency-list-item">
          <span>{name}:</span> {value}
        </div>
      })}
    </div>
  );
};

Currencies.propTypes = {
  list: propTypes.array,
};

export default Currencies;