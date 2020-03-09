import React, {useState} from 'react';
import {FormGroup, Input, Label} from 'reactstrap';
import Checkbox from 'react-simple-checkbox';

const CurrenciesList = ({currencies, changeHandler}) => {
  const [checked, setChecked] = useState({});

  function clickHandler(isChecked, item) {
    const checkedCopy = {...checked};
    if(isChecked){
      checkedCopy[item.id] = item;
    } else {
      delete checkedCopy[item.id];
    }
    setChecked(checkedCopy);
    changeHandler(checkedCopy);
  }

  return (
    <div>
      {currencies.map(item => <div style={{display: 'flex', alignItems : 'center'}}>
          <Checkbox checked={checked[item.id]}
                    onChange={(c) => {clickHandler(c, item)}}
                    size={2}
                    color={'#3c8dbc'}
          />
          {' '}
          <span>{item.name}</span>
        </div>
        )}
    </div>
  );
};

export default CurrenciesList;