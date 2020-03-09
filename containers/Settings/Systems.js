import React, {useState}                            from 'react';
import {Badge, Box, Col, Content, Row, SimpleTable} from 'adminlte-2-react';
import {Button}                                     from 'reactstrap';
import ConfirmationModal                            from '../../components/ConfirmationModal';
import SystemsCreateModal                           from '../../components/Settings/Systems/SystemsCreateModal';

const Systems = () => {
  const [search, setSearch] = useState({id: '', name: ''});
  const [confirmModal, setConfirmModal] = useState({id: '', isOpen: false});
  const createUpdateModal = useState({isOpen: false, data: null});

  const hideConfirmModal = () => {
    setConfirmModal({id: '', isOpen: false})
  };

  const removeItem = () => {
    hideConfirmModal();
  };

  const searchChange = e => {
    setSearch({...search, [e.target.name]: e.target.value});
  };

  const renderUser = (data, rowInfo) => {
    return <a href="#"
              className="table-user"
              onClick={() => {createUpdateModal[1]({isOpen: true, data: rowInfo})}}
    >{data}</a>
  };

  const getIdTitle = () => {
    return <div className="table-th-with-search id">
      <p>ID</p>
      <input type="text"
             name="id"
             value={search.id}
             onChange={searchChange}
      />
    </div>;
  };

  const getUsernameTitle = () => {
    return <div className="table-th-with-search">
      <p>Username</p>
      <input type="text"
             name="name"
             value={search.name}
             onChange={searchChange}/>
    </div>;
  };

  const renderButton = (data, rowInfo) => {
    return <Button color={'danger'}
                   style={{marginBottom: '5px'}}
                   onClick={() => {setConfirmModal({id: rowInfo.id, isOpen: true})}}
    ><i className="fa fa-fw fa-trash"/></Button>
  };

  const renderActivation = data => {
    switch (data) {
      case 0:
        return <Badge color={'red'} text={'Не активирован'}/>;
      case 1:
        return <Badge color={'green'} text={'Активирован'}/>;
    }
  };

  const renderCurrencies = data => {
    return data.reduce((acc, item) => `${acc}${item.name}, `, '').slice(0, -2);
  };

  const columns = [
    {title: getIdTitle(), data: 'id', width: '100px'},
    {title: getUsernameTitle(), data: 'name', render: renderUser, width: '220px'},
    {title: 'Currencies', data: 'currencies', render: renderCurrencies},
    {title: 'Active', data: 'active', render: renderActivation},
    {title: 'Действия', data: 'buttons', render: renderButton},
  ];

  const data = [
    {
      id: '1',
      name: 'WebMoney',
      currencies: [{name: 'USD', val: 'dol'}, {name: 'COIN', val: 'col'}],
      active: 0,
    },

    {
      id: '2',
      name: 'WebMoney',
      currencies: [{name: 'USD', val: 'dol'}, {name: 'COIN', val: 'col'}],
      active: 1,
    },

    {
      id: '4',
      name: 'WebMoney',
      currencies: [{name: 'USD', val: 'dol'}, {name: 'COIN', val: 'col'}],
      active: 1,
    },

    {
      id: '8',
      name: 'WebMoney',
      currencies: [{name: 'USD', val: 'dol'}, {name: 'COIN', val: 'col'}],
      active: 0,
    },
  ];
  return (
    <Content title="Системы" browserTitle="Системы">
      <Row>
        <Col lg={12} style={{marginBottom: '20px'}}>
          <Button color="primary"
                  onClick={() => createUpdateModal[1]({isOpen: true, data: null})}
          >
            Create new
          </Button>
        </Col>
      </Row>
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
      <SystemsCreateModal hook={createUpdateModal}/>
      <ConfirmationModal isOpen={confirmModal.isOpen}
                         hide={hideConfirmModal}
                         submit={removeItem}
                         text={'Are you sure you want to delete?'}
                         title={'Confirm'}
      />
    </Content>
  );
};

export default Systems;