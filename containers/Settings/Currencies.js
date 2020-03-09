import React, {useState}                                    from 'react';
import {Badge, Box, Col, Content, Row, SimpleTable}         from 'adminlte-2-react';
import {Button} from 'reactstrap';
import CurrencyCreateModal
                                                            from '../../components/Settings/Currency/CurrencyCreateModal';
import ConfirmationModal                                    from '../../components/ConfirmationModal';


const Currencies = () => {
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

  const renderUser = (data, rowInfo) => {
    return <a href="#"
              className="table-user"
              onClick={() => {createUpdateModal[1]({isOpen: true, data: rowInfo})}}
    >{data}</a>
  };

  const renderLogo = data => {
    return <img src="" alt=""/>
  };

  const renderActivation = data => {
    switch (data) {
      case 0:
        return <Badge color={'red'} text={'Не активирован'}/>
      case 1:
        return <Badge color={'green'} text={'Активирован'}/>
    }
  };

  const renderButton = (data, rowInfo) => {
    return <Button color={'danger'}
                   style={{marginBottom: '5px'}}
                   onClick={() => {setConfirmModal({id: rowInfo.id, isOpen: true})}}
    ><i className="fa fa-fw fa-trash"/></Button>
  };

  const columns = [
    {title: getIdTitle(), data: 'id', width: '100px'},
    {title: getUsernameTitle(), data: 'name', render: renderUser, width: '220px'},
    {title: 'Short name', data: 'short_name', width: '100px'},
    {title: 'Logo', data: 'type', render: renderLogo, width: '100px'},
    {title: 'Type', data: 'type', width: '100px'},
    {title: 'Activation', data: 'active', render: renderActivation},
    {title: 'Действия', data: 'buttons', render: renderButton},
  ];

  const data = [
    {id: 1, name: 'Dollar', short_name: 'USD', logo: '', type: 'valute', active: 0},
    {id: 2, name: 'Dolfsadlar', short_name: 'USf', logo: '', type: 'valute', active: 1},
    {id: 3, name: 'Dollsadar', short_name: 'fSD', logo: '', type: 'coin', active: 0},
    {id: 4, name: 'Dol234lar', short_name: 'UgfsdSD', logo: '', type: 'coin', active: 1},
    {id: 5, name: 'Dollar', short_name: 'gsdf', logo: '', type: 'valute', active: 0},
  ];

  return (
    <Content title="Валюты" browserTitle="Валюты">
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
      <CurrencyCreateModal hook={createUpdateModal}/>
      <ConfirmationModal isOpen={confirmModal.isOpen}
                         hide={hideConfirmModal}
                         submit={removeItem}
                         text={'Are you sure you want to delete?'}
                         title={'Confirm'}
      />
    </Content>


  );
};

export default Currencies;